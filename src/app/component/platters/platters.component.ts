import { Component, OnInit } from '@angular/core';
import {GetPlattersService } from "../../services/get-platters.service"

@Component({
  selector: 'app-platters',
  templateUrl: './platters.component.html',
  styleUrls: ['./platters.component.scss']
})
export class PlattersComponent implements OnInit {
  cart:any=[];
  total:number=0;
  image = "https://picsum.photos/200/300";
  title :string= 'Angular Search Using ng2-search-filter';
  searchText:any;
  items=[

    {
        count: 1,
        _id: "612a4fdf9f57c92783d6437c",
        name: "French dish 1",
        price: 89,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612a4fdf9f57c92783d6437c",
        name: "French dish 1",
        price: 89,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612a4fdf9f57c92783d6437c",
        name: "French dish 1",
        price: 89,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612a4fdf9f57c92783d6437c",
        name: "French dish 1",
        price: 89,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612d2fe506f46ce19e7ad2cd",
        name: "French dish 2",
        price: 10000,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612d391706f46ce19e7ad2d0",
        name: "French dish 3",
        price: 10000,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612d391806f46ce19e7ad2d2",
        name: "French dish 9",
        price: 10000,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    },
    {
        count: 1,
        _id: "612d391906f46ce19e7ad2d4",
        name: "French dish 6",
        price: 10000,
        description: "this is a pizza",
        image: "https://picsum.photos/200/300",
        __v: 0
    }
]

  // private platters: GetPlattersService
  constructor(private platters: GetPlattersService) { }

  ngOnInit(): void {
    this.getListOfPlatters();
    this.addTotal()
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
      const data = this.items.filter((product) => {
        return product._id === id;
      });
      this.cart= [...this.cart, ...data];

      const existing:any = localStorage.getItem("cart_data");
      localStorage.setItem("cart_data", JSON.stringify(data));
      existing.push(data)
      localStorage.setItem("allEntries", JSON.stringify(existing));
      // this.platters.platters.push([...data])
      localStorage.setItem("cart_data", JSON.stringify([...data]));
      this.platters.getAllPlatters()
    } else {
      alert("item already selected");

  };
  
  
}

add = (id:any) => {
  const { cart } = this;
  cart.forEach((item:any) => {
    if (item._id === id) {
      item.count += 1;
    }
  });
   this.cart= cart
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
}// addCart(item:any){
  //   this.cart.push(item)
  //   console.log("the cart", this.cart)
  // }

