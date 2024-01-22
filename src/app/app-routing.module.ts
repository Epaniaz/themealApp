// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailSaucerComponent } from './pages/detail-saucer/detail-saucer.component';
import { HistorySaucerSearchComponent } from './pages/history-saucer-search/history-saucer-search.component';

// dominio.com/
const routes: Routes = [
  {
    path: 'index',
    component: HomePageComponent,
    // loadChildren: () => import('./modules/the-mela/the-mela.module').then( m => m.TheMelaModule ),
  },
  {
    path: 'detail',
    component: DetailSaucerComponent,
    // loadChildren: () => import('./modules/the-mela/the-mela.module').then( m => m.TheMelaModule ),
  },
  {
    path: 'history-saucer-search',
    component: HistorySaucerSearchComponent,
    // loadChildren: () => import('./modules/the-mela/the-mela.module').then( m => m.TheMelaModule ),
  },
  { path: 'detail/:id', component: DetailSaucerComponent },

  // {
  //   path: '404',
  //   // component: Error404PageComponent,
  // },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
