import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  readonly root_url:string;

  constructor(private http:HttpClient) { 
    this.root_url ="https://q2wso2.moduurn.ca/locationapi/v3/locations/5f5f89c542b7310f582cee00/locations?&timezoneOffset=-330&lat=76.54555309999999&lng=10.7300442";
  }


getData(){
  return this.http.get(this.root_url);
}

}
