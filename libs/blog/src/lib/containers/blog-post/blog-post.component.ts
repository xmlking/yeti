import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content, ContentService } from '../../services/content.service';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'yeti-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  post$: Observable<Content | undefined>;
  location: null;
  showComments: boolean;

  constructor(private route: ActivatedRoute, private cs: ContentService, private highlightService: HighlightService) {
    this.showComments = false;
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  ngOnInit() {
    this.post$ = this.cs.allContent$.pipe(
      map((allPosts) => {
        return allPosts.find(
          (blog) => blog.route.startsWith(`/home/blog/`) && blog.route.includes(this.route.snapshot.params.id)
        );
      })
    );
  }

  shareTextContent() {
    return encodeURI(location.href);
  }

  onLoad(event: EventEmitter<string>) {
    // console.log('onLoad', event)
  }
  onError(event: EventEmitter<string>) {
    console.error('onError', event);
  }
  onReady(event: EventEmitter<void>) {
    console.log('onReady');
  }
}
