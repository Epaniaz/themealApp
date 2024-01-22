   
   export interface Meals {
      idMeal: string;
      strMeal: string;
      strDrinkAlternate: string | null;
      strCategory: string;
      strArea: string;
      strInstructions: string;
      strMealThumb: string;
      strTags: string;
      strYoutube: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7: string;
      strIngredient8: string;
      strIngredient9: string;
      strIngredient10: string | null;
      strIngredient11: string | null;
      strIngredient12: string | null;
      strIngredient13: string | null;
      strIngredient14: string | null;
      strIngredient15: string | null;
      strIngredient16: string | null;
      strIngredient17: string | null;
      strIngredient18: string | null;
      strIngredient19: string | null;
      strIngredient20: string | null;
      strMeasure1: string;
      strMeasure2: string;
      strMeasure3: string;
      strMeasure4: string;
      strMeasure5: string;
      strMeasure6: string;
      strMeasure7: string;
      strMeasure8: string;
      strMeasure9: string;
      strMeasure10: string | null;
      strMeasure11: string | null;
      strMeasure12: string | null;
      strMeasure13: string | null;
      strMeasure14: string | null;
      strMeasure15: string | null;
      strMeasure16: string | null;
      strMeasure17: string | null;
      strMeasure18: string | null;
      strMeasure19: string | null;
      strMeasure20: string | null;
      strSource: string | null;
      strImageSource: string | null;
      strCreativeCommonsConfirmed: string | null;
      dateModified: string | null;
    };

    export interface ResponseMeals {
        meals:Meals[]
    }
    
    export interface Category {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
  }