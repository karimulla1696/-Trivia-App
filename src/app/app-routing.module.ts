import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { QuestionComponent } from './question/question.component';
import { FinalComponent } from './final/final.component';
import { HistoryComponent } from './history/history.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'question/:id',
    component: QuestionComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
