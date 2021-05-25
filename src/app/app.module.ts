import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    LevelComponent,
    QuestionAdminComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
