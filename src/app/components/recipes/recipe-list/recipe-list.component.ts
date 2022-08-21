import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe test',
      'this is simple test ',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg'
    ),
    new Recipe(
      'another Recipe test',
      'this is simple test ',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
