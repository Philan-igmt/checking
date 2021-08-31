import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const headers = new HttpHeaders()
.append('Content-Type', 'application/json')
@Injectable()
export class GetPlattersService {

  
  constructor(private httpClient: HttpClient) { }
  platters:any=[];
  


  getAllPlatters() {
    // let url = "http://localhost:3000/platters"
    // return this.httpClient.get(url)
    // this.httpClient.get<any>('http://localhost:3000/platters').subscribe(data => {
    //      return "this is the data"+data
    // }) 
    // const headers = { 'Content-Type': 'application/json'}
    // this.httpClient.get<any>('http://localhost:3000/platters', { headers }).subscribe(data => {
    //     this.platters = data.total;
   
    // })
    // fetch('http://localhost:3000/platters',{
    //   method: 'GET', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));
        //  console.log("this is the function call", this.platters)
        //  this.httpClient.get('/platters').subscribe(data => {
        //     console.log("this is the data",data);
        // })

        console.log("this is",this.platters)
    
  }
}
