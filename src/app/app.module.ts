import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ForgetComponent,
    DashboardComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
