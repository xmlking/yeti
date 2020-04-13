import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, filter, map, shareReplay, switchMap } from 'rxjs/operators';

const METADATA_PATH = '/assets/blog/metadata.json';

export interface Content {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  [prop: string]: any;
}
/**
 * This service expose metadata about content
 */
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private refresh = new ReplaySubject<void>(1);

  allContent$: Observable<Content[]> = this.refresh.pipe(
    switchMap(() => this.http.get<Content[]>(METADATA_PATH)),
    catchError((error) => {
      console.warn('metadata.json file not found, Did you forgot to run `node tools/scripts/metagen.mjs`?');
      return of([] as Content[]);
    }),
    filter((routes) => Array.isArray(routes)),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  publishedContent$ = this.allContent$.pipe(
    map((list) => list.filter((r) => (r.hasOwnProperty('published') ? r.published !== false : true))),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  unPublishedContent$ = this.allContent$.pipe(
    map((list) => list.filter((r) => (r.hasOwnProperty('published') ? r.published === false : false))),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  constructor(private http: HttpClient) {
    /** kick off first cycle */
    this.reload();
  }

  reload(): void {
    this.refresh.next();
  }

  getCurrent(): Observable<Content | undefined> {
    if (!location) {
      /** probably not in a browser, no current location available */
      return of();
    }
    const curLocation = location.pathname.trim();
    return this.allContent$.pipe(
      map((list) =>
        list.find(
          (r) =>
            curLocation === r.route.trim() ??
            (r.slugs && Array.isArray(r.slugs) && r.slugs.find((slug) => curLocation.endsWith(slug.trim())))
        )
      )
    );
  }
}
