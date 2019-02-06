import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { LinksComponent } from './links/links.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'application/:application',
    component: CategoriesComponent,
    // children: [
    //   {
    //     path: ':category',
    //     component: LinksComponent
    //   }
    // ]
  },
  {
    path: 'application/:application/:category',
    component: LinksComponent
  },
  {
    path: 'application/:application/:category/:linkId',
    component: LinkDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
