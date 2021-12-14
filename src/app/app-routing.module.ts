import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetComponent } from './forget/forget.component';


const routes: Routes = [
  // {path: '' , component: AuthComponent},
  // {path: 'auth' , component: AuthComponent},
  // {path: 'forget' , component: ForgetComponent},
  // {path: 'dashboard' , component: DashboardComponent},
  // {path: 'add-user' , component: AddUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
