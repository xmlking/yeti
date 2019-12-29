import { Injectable } from '@angular/core';
import { RouterNavigation } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
import { PageTitleService } from '../services/page-title.service';
import { RouterStateData } from './custom-router-state.serializer';

@Injectable({
  providedIn: 'root'
})
export class RouteHandler {
  constructor(
    private actions$: Actions,
    private analytics: AnalyticsService,
    private pageTitle: PageTitleService
  ) {
    this.actions$
      .pipe(
        ofActionSuccessful(RouterNavigation),
        map((action: RouterNavigation) => action.routerState as any),
        distinctUntilChanged(
          (previous: RouterStateData, current: RouterStateData) => {
            return previous.url === current.url;
          }
        )
      )
      .subscribe(data => {
        this.pageTitle.setTitle(data.breadcrumbs);
        this.analytics.setPage(data.url);
      });
  }
}
