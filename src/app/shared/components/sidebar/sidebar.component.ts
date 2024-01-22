import { Component } from '@angular/core';
import { MealsService } from '../../../services/theMealDb.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // private gifsService
  constructor( private mealsService: MealsService  ) {}

  get tags(): string[] {
    return this.mealsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.mealsService.searchTag( tag );
  }

}
