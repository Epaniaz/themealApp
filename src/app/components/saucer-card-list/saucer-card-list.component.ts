import { Component, Input } from '@angular/core';
import { Meals } from 'src/app/interfaces/meal.interfaces';
import { MealsService } from '../../services/theMealDb.service';

@Component({
  selector: 'app-saucer-card-list',
  templateUrl: './saucer-card-list.component.html',
  styleUrls: ['./saucer-card-list.component.scss']
})
export class SaucerCardListComponent {


  @Input()
  public meals: Meals[] = [];

  constructor(public mealsService:MealsService){

  }

}
