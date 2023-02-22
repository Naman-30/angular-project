import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {


  constructor(private _headerService:HeaderService) {

   }
   searchInput: any;

   products  = [
    {
      Id : 1,
      Name: 'Mobile',
      Price: 20000,
      availability: 'Available'
    },
    {
      Id : 2,
      Name: 'Television',
      Price: 35000,
      availability: 'Available'
    },
    {
      Id : 3,
      Name: 'Refrigerator',
      Price: 50000,
      availability: 'NotAvailable'
    },
    {
      Id : 4,
      Name: 'Washing Machine',
      Price: 40000,
      availability: 'Available'
    },
    {
      Id : 5,
      Name: 'A.C.',
      Price: 25000,
      availability: 'NotAvailable'
    },
    {
      Id : 6,
      Name: 'Fan',
      Price: 10000,
      availability: 'NotAvailable'
    },
    {
      Id : 7,
      Name: 'Cooler',
      Price: 16000,
      availability: 'NotAvailable'
    },
    {
      Id : 8,
      Name: 'Light',
      Price: 2000,
      availability: 'Available'
    },
    {
      Id : 9,
      Name: 'Tablet',
      Price: 20000,
      availability: 'Available'
    },
    {
      Id : 10,
      Name: 'Laptop',
      Price: 60000,
      availability: 'Available'
    },
    {
      Id : 11,
      Name: 'P.C.',
      Price: 100000,
      availability: 'Available'
    },

  ]

  ngOnInit(): void {
    this._headerService.loader.next(true);

  }

}
