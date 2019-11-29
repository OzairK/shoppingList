import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('over nigh oats', 'tasty breakfast snack', 'https://live.staticflickr.com/1667/25340688743_07053009f6_b.jpg'), new Recipe('over nigh oats', 'tasty breakfast snack', 'https://live.staticflickr.com/1667/25340688743_07053009f6_b.jpg')]

  constructor() { }

  ngOnInit() {
  }

}
