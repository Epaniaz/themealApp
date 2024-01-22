import { Component } from '@angular/core';
import { MealsService } from '../../services/theMealDb.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: any[] = [];
  selectedCategory: string | undefined;

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.mealsService.getCategories().subscribe(
      {
        next:(cat=>{
          this.categories = cat.categories;
          console.log(cat);
        })
      }
    );

  }

  onCategorySelected(): void {
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.mealsService.getCategoryById(this.selectedCategory!);
    // Aquí puedes agregar más lógica que quieras ejecutar cuando se seleccione una categoría
  }

}
