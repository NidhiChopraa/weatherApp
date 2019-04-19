import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{
constructor(private http:HttpClient) { }
getFact(location:string){
  return this.http.get(`http://api.apixu.com/v1/forecast.json?key=efe9d9bf5b0f4294ba0162531191804&q=${location}&days=7`)
  
}
}
