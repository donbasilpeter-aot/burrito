import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-block',
  templateUrl: './view-block.component.html',
  styleUrls: ['./view-block.component.css']
})
export class ViewBlockComponent implements OnInit {
  @Input() details: any ;
  

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    sessionStorage.setItem('details', JSON.stringify(this.details))
  }
  

 
 
}
