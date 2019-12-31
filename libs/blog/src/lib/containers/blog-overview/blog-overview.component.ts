import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'yeti-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogOverviewComponent implements OnInit {
  keyword: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.keyword = this.route.snapshot.queryParams.keyword;
  }
}
