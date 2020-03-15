import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content, ContentService } from '../../services/content.service';

@Component({
  selector: 'yeti-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPreviewComponent implements OnInit {
  @Input() max: number;
  @Input() keyword: string;
  posts$: Observable<Content[]>;

  constructor(private cs: ContentService) {}

  ngOnInit() {
    this.posts$ = this.cs.publishedContent$.pipe(
      map(posts =>
        posts
          .filter(post => post.route.startsWith(`/home/blog/`))
          .filter(post => (this.keyword ? post.keywords.includes(this.keyword) : true))
          .map(filteredPosts => (this.max ? filteredPosts.slice(0, this.max) : filteredPosts))
      )
    );
  }
}
