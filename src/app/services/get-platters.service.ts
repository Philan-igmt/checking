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
  postId:any='';
  private REST_API_SERVER = "http://localhost:5000/platters";
  private REST_API_SERVER2 = "http://localhost:5000/cart/billing";
  private REST_API_SERVER3 = "http://localhost:5000/appointment";

  public getAllPlatters(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public sendCartAndDeliveryAddress(street:string,city:string,area:string,deliveryDate:string,deliveryTime:string,option:string,cart:any=[],total:number){
    return this.httpClient.post<any>(this.REST_API_SERVER2, {
      streetaddress:street,
      city:city,
      area:area,
      deliveryDate:deliveryDate,
      deliveryTime:deliveryTime,
      option:option,
      cart:cart,
      total:total
    }).subscribe(data => {
        this.postId = data;
        console.log("this is the post id",this.postId)
    })
  }

  public sendAppointment(name:string,surname:string,email:string,cellphoneNumber:string,option:string,reason:string,slot:string){
    return this.httpClient.post<any>(this.REST_API_SERVER3, {
      name:name,
      surname:surname,
      email:email,
      cellphoneNumber:cellphoneNumber,
      option:option,
      reason:reason,
      slot:slot
    }).subscribe(data => {
      this.postId = data;
      console.log("this is the post id",this.postId)
  })
  }

}