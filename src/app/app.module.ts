import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { TopicCreateComponent } from './topic/topic-create/topic-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicUpdateComponent } from './topic/topic-update/topic-update.component';
import { TopicDeleteComponent } from './topic/topic-delete/topic-delete.component';
import { LevelListComponent } from './level/level-list/level-list.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelComponent,
    QuestionComponent,
    AnswerComponent,
    TopicCreateComponent,
    TopicListComponent,
    TopicUpdateComponent,
    TopicDeleteComponent,
    LevelListComponent,
    TopicDetailsComponent,
    AnswerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
