import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OffCounterComponent } from './off-counter/off-counter.component';
import { FdaDrugInfoComponent } from './fda-drug-info/fda-drug-info.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-over-counter', component: OffCounterComponent },
  { path: 'fda-drug-info', component: FdaDrugInfoComponent },
  { path: 'landing', component: LandingComponent},
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
