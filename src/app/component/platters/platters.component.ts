import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-platters',
  templateUrl: './platters.component.html',
  styleUrls: ['./platters.component.scss']
})
export class PlattersComponent implements OnInit {
  image = "assets/images/download.jpeg";

  title :string= 'Angular Search Using ng2-search-filter';
  searchText:any;
  heroes = [
    { id: 11, name:this.image, country: 'India' },
    { id: 11, name:this.image, country: 'India' },
    { id: 11, name:this.image, country: 'India' },
    { id: 11, name:this.image, country: 'India' },
    // { id: 11, name:this.image, country: 'India' },
    // { id: 11, name:this.image, country: 'India' },
    // { id: 11, name:this.image, country: 'India' },
    // { id: 11, name:this.image, country: 'India' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
