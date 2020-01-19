import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yeti-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPreviewComponent implements OnInit {
  @Input() max: number;
  @Input() keyword: string;
  blogPostData$: Observable<ScullyRoute[]>;

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {
    this.blogPostData$ = this.srs.available$.pipe(
      map(routeList => {
        // prettier-ignore
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/home/blog/`)
        );
      }),
      map(routeList => {
        if (!this.keyword) {
          return routeList;
        }
        // prettier-ignore
        return routeList.filter((route: ScullyRoute) =>
          route.keywords.includes(this.keyword)
        );
      }),
      map(routeList => {
        if (this.max) {
          routeList = routeList.slice(0, this.max);
        }
        return routeList.reverse();
      })
    );
  }
}
