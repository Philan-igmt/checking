import { Component, OnInit } from '@angular/core';
import {GetPlattersService } from "../../services/get-platters.service"
// import axios from 'axios';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-platters',
  templateUrl: './platters.component.html',
  styleUrls: ['./platters.component.scss']
})
export class PlattersComponent implements OnInit {
  cart:any=[];
  total:number=0;
  something:any=[];
  picker:any;
  // checkoutForm;
  checkoutForm: FormGroup = new FormGroup({
    streetaddress: new FormControl(),
    city: new FormControl(),
    area: new FormControl(),
    deliveryDate: new FormControl(),
    deliveryTime: new FormControl(),
    option: new FormControl(),
  });
  image = "https://picsum.photos/200/300";
  title :string= 'Angular Search Using ng2-search-filter';
  searchText:any;

  // private platters: GetPlattersService
  constructor(private platters: GetPlattersService) { }

  ngOnInit(): void {
    this.platters.getAllPlatters().subscribe((data:any)=>{
      console.log("This are the platters from the database",data);
      this.something = data;

    }) 
  }

  onSubmit(){
    console.log("somethin has been pressed")
  }

  viewProduct(id:any){
    console.log("this is the id of the pressed item",id);
  }

  getListOfPlatters(){
    this.platters.getAllPlatters()

  }
  addCart = (id:any) => {
    
    const check = this.cart.every((item:any) => {
      return item._id !== id;
    });
    if (check) {
      const data = this.something.filter((product:any) => {
        return product._id === id;
      });
      this.cart= [...this.cart, ...data]
      this.addTotal() ;
    } else {
      alert("item already selected");
    }
  
  
}

add = (id:String) => {
  const { cart } = this;
  cart.forEach((item:any={}) => {
    if (item._id == id) {
      item.count += 1;
    }
  });
  this.cart= cart;
  this.addTotal();
};

minus = (id:any) => {
  const { cart } = this;
  cart.forEach((item:any) => {
    if (item._id === id) {
      item.count === 1 ? (item.count = 1) : (item.count -= 1);
    }
  });
  this.cart=cart
  this.addTotal();
};

removeItem = (id:any) => {
  const { cart } = this;
  cart.forEach((item:any, index:any) => {
    if (item._id === id) {
      cart.splice(index, 1);
    }
  });
  this.cart= cart;
  this.addTotal();
};

addTotal = () => {

  const { cart } = this;
  const results = cart.reduce((prev:any, product:any) => {
    return prev + product.price * product.count;
  }, 0);
   this.total=results;
};
}
  

