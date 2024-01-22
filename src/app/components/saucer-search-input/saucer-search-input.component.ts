import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MealsService } from '../../services/theMealDb.service';

@Component({
  selector: 'app-saucer-search-input',
  templateUrl: './saucer-search-input.component.html',
  styleUrls: ['./saucer-search-input.component.scss']
})
export class SaucerSearchInputComponent {
   formSearch: FormGroup;

  constructor(private fb:FormBuilder, private mealsService:MealsService){
    this.formSearch = this.fb.group({
      text: new FormControl(null, Validators.required)
    })
  }


  ngOnInit(): void {
  } 

  searchTag() {
    const newTag = this.formSearch.get('text')?.value;
    this.mealsService.searchTag(newTag);
  }
  
}
