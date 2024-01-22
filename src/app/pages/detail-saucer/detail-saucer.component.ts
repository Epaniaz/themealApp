import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MealsService } from '../../services/theMealDb.service';
import { Meals } from 'src/app/interfaces/meal.interfaces';

@Component({
  selector: 'app-detail-saucer',
  templateUrl: './detail-saucer.component.html',
  styleUrls: ['./detail-saucer.component.scss'],
})
export class DetailSaucerComponent {
  
  meal?:Meals; 


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mealsService:MealsService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.mealsService.getSaucerById( id )),
      )
      .subscribe( meal => {
        if ( !meal ) return this.router.navigate([ '/index' ]);
        console.log(meal);
        
        this.meal = meal.meals[0];
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('index')
  }

  
  getIngredients(meal:any): string[] {
    let ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
    }
    return ingredients;
  }

}
