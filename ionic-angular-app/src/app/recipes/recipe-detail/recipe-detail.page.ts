import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe?: Recipe;
  recipeId?: string;

  constructor(private activatedRoute : ActivatedRoute,
    private recipeService: RecipesService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')) {
          // redirect
          return;
        }

        this.recipeId = paramMap.get('recipeId')?.toString();
        this.loadedRecipe = this.recipeService.getRecipe(this.recipeId?.toString());
      });
  }

}
