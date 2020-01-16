import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'yeti-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  post$: Observable<any>;
  location: null;
  showComments: boolean;

  constructor(private route: ActivatedRoute, private srs: ScullyRoutesService, private highlightService: HighlightService) {
    this.showComments = isScullyGenerated();
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  ngOnInit() {
    this.post$ = this.srs.available$.pipe(
      map(routeList => {
        return routeList.filter(
          // prettier-ignore
          (route: ScullyRoute) =>
          route.route.startsWith(`/home/blog/`) &&
          route.route.includes(this.route.snapshot.params.id)
        );
      }),
      map(currentPostData => {
        return currentPostData[0];
      })
    );
  }

  shareTextContent() {
    return encodeURI(location.href);
  }
}
