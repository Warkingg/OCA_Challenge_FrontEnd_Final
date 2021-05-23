import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicCreateComponent } from './topic/topic-create/topic-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicUpdateComponent } from './topic/topic-update/topic-update.component';
import { TopicDeleteComponent } from './topic/topic-delete/topic-delete.component';
import { LevelListComponent } from './level/level-list/level-list.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicCreateComponent,
    TopicListComponent,
    TopicUpdateComponent,
    TopicDeleteComponent,
    LevelListComponent,
    TopicDetailsComponent
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
