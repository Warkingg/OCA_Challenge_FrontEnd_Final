import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionComponent} from './question/question.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LevelListComponent} from './level/level-list/level-list.component';
import {AdminComponent} from './admin/admin.component';
import {LevelComponent} from './admin/level/level.component';
import {QuestionAdminComponent} from './admin/question-admin/question-admin.component';


const routes: Routes = [
  {
    path: 'levels',
    component: LevelListComponent
  },
  {
    path: 'login',
component: LoginComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuestionComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/level/:id',
    component: LevelComponent
  },
  {
    path: 'admin/question/:id',
    component: QuestionAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
