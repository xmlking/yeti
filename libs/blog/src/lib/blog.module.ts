import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SharedModule } from '@yeti/shared';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { BlogOverviewComponent } from './containers/blog-overview/blog-overview.component';
import { BlogPostComponent } from './containers/blog-post/blog-post.component';

@NgModule({
  imports: [
    SharedModule,
    ScullyLibModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: BlogOverviewComponent },
      {
        path: ':id',
        component: BlogPostComponent
      }
    ])
  ],
  declarations: [BlogOverviewComponent, BlogPostComponent, BlogPreviewComponent]
})
export class BlogModule {}
