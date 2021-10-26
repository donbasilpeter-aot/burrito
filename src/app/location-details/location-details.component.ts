import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  details:any ="";
 

  constructor() {
   
   }

  ngOnInit(): void {
    this.details =sessionStorage.getItem("details")
    this.details = JSON.parse(this.details  );
  

  
   
  }

}
