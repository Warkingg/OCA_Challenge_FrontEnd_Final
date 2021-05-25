import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LevelListComponent } from './level/level-list/level-list.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {JwtInterceptor} from './interceptor';
import { Home1Component } from './home1/home1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LevelComponent } from './admin/level/level.component';
import { QuestionAdminComponent } from './admin/question-admin/question-admin.component';
import {MatRadioModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    AnswerComponent,
    LevelListComponent,
    AdminComponent,
    AnswerComponent,
    LoginComponent,
    RegisterComponent,

    ProfileComponent,
    ChangePasswordComponent,
    Home1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
    LevelComponent,
    QuestionAdminComponent
   
  })

export class AppModule { }
