import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: 'laptop',
      price: 72000
    },
    {
      name: 'mobile',
      price: 45000
    },
    {
      name: 'T.V',
      price: 100000
    },
    {
      name: 'Tablet',
      price: 32000
    }
  ]

  fruits = [
    {
      name: 'Mango',
      price: 72
    },
    {
      name: 'Banana',
      price: 45
    },
    {
      name: 'Apple',
      price: 100
    },
    {
      name: 'PineApple',
      price: 220
    }
  ]

}
