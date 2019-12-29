import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogListComponent } from './containers/blog-list/blog-list.component';
import { BlogComponent } from './containers/blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: BlogListComponent },
      {
        path: ':id',
        component: BlogComponent
      }
    ])
  ],
  declarations: [BlogListComponent, BlogComponent]
})
export class BlogModule {}
