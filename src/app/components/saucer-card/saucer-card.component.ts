import { Component, Input } from '@angular/core';
import { Meals } from 'src/app/interfaces/meal.interfaces';

@Component({
  selector: 'app-saucer-card',
  templateUrl: './saucer-card.component.html',
  styleUrls: ['./saucer-card.component.scss']
})
export class SaucerCardComponent {

   @Input()
   public Meals!: Meals;


  ngOnInit(): void {
    if ( !this.Meals ) throw new Error('Gif property is required');
  }
}
