import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { BlogOverviewComponent } from './containers/blog-overview/blog-overview.component';
import { BlogPostComponent } from './containers/blog-post/blog-post.component';
import { HighlightService } from './services/highlight.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: BlogOverviewComponent },
      {
        path: ':id',
        component: BlogPostComponent
      }
    ])
  ],
  declarations: [
    BlogOverviewComponent,
    BlogPostComponent,
    BlogPreviewComponent
  ],
  providers: [HighlightService]
})
export class BlogModule {}
