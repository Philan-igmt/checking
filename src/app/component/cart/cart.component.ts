import { Component, OnInit } from '@angular/core';
import {GetPlattersService } from "../../services/get-platters.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  image = "https://picsum.photos/200/300";
  cart:any=[]
  constructor(private platters:GetPlattersService  ) { }

  ngOnInit(): void {
    const cart_data = localStorage.getItem("cart_data");
    this.cart = cart_data
    // localStorage.setItem("cart_data", JSON.stringify(this.cart));
    console.log("this is the cart",this.cart)
  }

  
}
