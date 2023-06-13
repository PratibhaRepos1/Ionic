import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe?: Recipe;
  recipeId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }

      this.recipeId = paramMap.get('recipeId')?.toString();
      this.loadedRecipe = this.recipeService.getRecipe(
        this.recipeId?.toString()
      );
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({ header: 'Are you sure?',
    message: 'Do you really want to delete the recipe?',
   buttons: [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Delete',
      handler: () => {
          if (this.loadedRecipe?.id)
            this.recipeService.deleteRecipe(this.loadedRecipe?.id);
          this.router.navigate(['/recipes']);
      }
    }
  ]
})
.then(alertEL => {
  alertEL.present();
});

  }
}
