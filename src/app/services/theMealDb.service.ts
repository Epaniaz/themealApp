import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Meals, ResponseMeals } from '../interfaces/meal.interfaces';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MealsService {
  public MealsList: Meals[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = '1';
  private serviceUrl: string = 'https://www.themealdb.com/api/json/v1/';
  public loading: boolean = false;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('meal Service Ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 5);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);
    this.loading = true;
    this.http
      .get<ResponseMeals>(
        `${this.serviceUrl}${this.apiKey}/search.php?s=${tag}`
      )
      .subscribe((resp) => {
        this.loading = false;

        if (resp) {
          this.MealsList = resp.meals;
        } else {
          this.MealsList = [];
        }
        // console.log({ gifs: this.gifList });
      });
  }

  getSaucerById( id: string ): Observable<any|undefined> {
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    return this.http.get<any>(`${ this.serviceUrl }${this.apiKey}/lookup.php?i=${id}`)
      .pipe(
      
        catchError( error => of(undefined) )
      );
  }

  getCategories(): Observable<any|undefined> {
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    return this.http.get<any>(`${ this.serviceUrl }${this.apiKey}/categories.php#`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }


  getCategoryById(value:string): void {
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
     this.http.get<any>(`${ this.serviceUrl }${this.apiKey}/filter.php?c=${value}`).subscribe((resp) => {
      this.loading = false;
      if (resp) {
        this.MealsList = resp.meals;
      } else {
        this.MealsList = [];
      }
      // console.log({ gifs: this.gifList });
    });
  }

  


  // www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

}
