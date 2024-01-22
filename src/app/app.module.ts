import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailSaucerComponent } from './pages/detail-saucer/detail-saucer.component';
import { SaucerSearchInputComponent } from './components/saucer-search-input/saucer-search-input.component';
import { SaucerCardComponent } from './components/saucer-card/saucer-card.component';
import { SaucerCardListComponent } from './components/saucer-card-list/saucer-card-list.component';
import { HistorySaucerSearchComponent } from './pages/history-saucer-search/history-saucer-search.component';
import { HistorySaucerHomeSearchComponent } from './components/history-saucer-home-search/history-saucer-home-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/angular-material/angular.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailSaucerComponent,
    SaucerSearchInputComponent,
    SaucerCardComponent,
    SaucerCardListComponent,
    HistorySaucerSearchComponent,
    HistorySaucerHomeSearchComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
