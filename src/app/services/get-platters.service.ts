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
  private REST_API_SERVER = "http://localhost:5000/platters";
  public getAllPlatters(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
