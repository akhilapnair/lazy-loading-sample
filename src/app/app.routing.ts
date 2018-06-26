import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'first',
        loadChildren: 'app/app-modules/first/first.module#FirstModule'
      },
      {
        path: 'second',
        loadChildren: 'app/app-modules/second/second.module#SecondModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
