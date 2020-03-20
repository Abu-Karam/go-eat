import { Component, OnInit } from '@angular/core';
import { IMeal } from './meal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.filteredMeals = this.meals;
    this._findText = 'fal';
   }

  ngOnInit(): void {
  }
  pageTitle: string = 'Menu List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _findText: string;
  get findText(): string {
    return this._findText;
  }
  set findText(value: string) {
    this._findText = value;
    this.filteredMeals = this.findText ? this.searchMeals(this.findText) :this.meals;
  }
  filteredMeals: IMeal[];
  meals: IMeal[] = [
    {
      "mealId": 1,
      "mealName": "Durum shawarma",
      "description": "Write some description",
      "price": 39.99,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 4.5
    },
    {
      "mealId": 2,
      "mealName": "Falafel",
      "description": "Write some description",
      "price": 19.99,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 3.7
    },
    {
      "mealId": 3,
      "mealName": "Flæskesteg",
      "description": "Write some description",
      "price": 14.95,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 2.2
    },
    {
      "mealId": 4,
      "mealName": "Frikadeller",
      "description": "Write some description",
      "price": 49.95,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 4.1
    },
    {
      "mealId": 5,
      "mealName": "Salmon",
      "description": "Write some description",
      "price": 39.95,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 2.4
    },
    {
      "mealId": 6,
      "mealName": "Pizza",
      "description": "Write some description",
      "price": 29.95,
      "imageUrl": "https://via.placeholder.com/300/09f/fff.png",
      "stars": 4
    }
  ];


  toggleImage(): void{
    this.showImage = !this.showImage;

  }
  searchMeals(byText: string): IMeal[] {
    byText = byText.toLocaleLowerCase();
    return this.meals.filter((meal: IMeal) =>
    meal.mealName.toLocaleLowerCase().indexOf(byText) !== -1);
  }


}
