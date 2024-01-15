import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css']
})
export class PropertyCartComponent implements OnInit {
  @Input() property: IPropertyBase
  
  //Hide icons from cart on add-property page
  @Input() hideIcons: boolean

  constructor() { }

  // Property: any = {
  //   "Id":1,
  //   "Name": "Tony Stark",
  //   "Type": "House",
  //   "Price": 12000
  // }

  ngOnInit(): void {
  }

}
