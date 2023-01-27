import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // recipes: Recipe[] = [new Recipe("A Test Recipe", "desc for test recipe", "https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1024:*"),
  // new Recipe("A Test Recipe 2", "desc for test recipe 2", "https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1024:*")];  constructor() { }

  ngOnInit(): void {
  }

}
