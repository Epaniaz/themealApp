import { Component } from '@angular/core';
import { MealsService } from '../../services/theMealDb.service';
import { Meals } from 'src/app/interfaces/meal.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor( private mealsService: MealsService ) {}

  get Meals(): Meals[] {
    return this.mealsService.MealsList;
}

}