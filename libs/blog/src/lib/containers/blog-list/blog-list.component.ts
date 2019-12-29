import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yeti-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map(routeList =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/home/blog/`))
    )
  );
  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
