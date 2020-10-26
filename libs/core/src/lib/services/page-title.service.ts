import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly defaultTitle: string;

  constructor(private bodyTitle: Title, private meta: Meta) {
    this.defaultTitle = bodyTitle.getTitle() ?? 'WebApp';
  }

  public setTitle(breadcrumbs: Map<string, string>) {
    this.bodyTitle.setTitle(`${Array.from(breadcrumbs.keys()).reverse().join(' | ')} | ${this.defaultTitle}`);
  }

  public setMeta(meta: Map<string, string>) {
    // this.meta.updateTag({ name: 'description', content: 'Hello World description!' });
  }
}
