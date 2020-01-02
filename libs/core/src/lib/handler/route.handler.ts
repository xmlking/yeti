import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { RouterNavigation } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { RouterStateData } from '../interfaces/router-state-data';
import { AnalyticsService } from '../services/analytics.service';
import { PageTitleService } from '../services/page-title.service';

@Injectable({
  providedIn: 'root'
})
export class RouteHandler {
  constructor(
    private actions$: Actions,
    private analytics: AnalyticsService,
    private pageTitle: PageTitleService,
    private viewportScroller: ViewportScroller
  ) {
    this.actions$
      .pipe(
        ofActionSuccessful(RouterNavigation),
        map((action: RouterNavigation) => action.routerState as any),
        distinctUntilChanged((previous: RouterStateData, current: RouterStateData) => {
          return previous.url === current.url;
        })
      )
      .subscribe(data => {
        this.pageTitle.setTitle(data.breadcrumbs);
        this.analytics.setPage(data.url);
      });

    // scroll To Top
    // this.actions$
    //   .pipe(ofActionSuccessful(RouterNavigation))
    //   .subscribe(event => {
    //     if (!/\#.*/.test(event.url)) {
    //       this.viewportScroller.scrollToPosition([0, 0]);
    //     }
    //   });
  }
}
