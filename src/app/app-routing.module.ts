import { DashboardComponent } from './layout/default/components/dashboard/dashboard.component';
import { DefualtComponent } from './layout/default/components/defualt/defualt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layout/blank/components/blank/blank.component';
import { LoginComponent } from './layout/blank/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefualtComponent,
    children: [
      { path: '', component: DashboardComponent}
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: '',
    component: DefualtComponent,
    children: [{ path: '**', component: DashboardComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
