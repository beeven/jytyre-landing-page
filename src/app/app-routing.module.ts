import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'advantage', component: AdvantageComponent, data: {animation: 'AdvantagePage'} },
  { path: 'history', component: HistoryComponent, data: {animation: 'HistoryPage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
