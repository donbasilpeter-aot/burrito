import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  id:string[] =[];
  data:any = [];
  details:any = "";
  notInArray =  function (id:string,array:string[])
  {
      var count=array.length;
      for(var i=0;i<count;i++)
      {
          if(array[i]===id){return false;}
      }
      return true;
  }


  constructor(private apiCall:ApicallService) { }

  ngOnInit(): void {
    this.onKey("");
  
  }

  viewDetails(item:any){
    this.details = item;

    
  }
  


  
 onKey(input:string){
       this.apiCall.getData().subscribe((response:any) =>{
        this.data = []
        this.id =[]

        for (let i = 0; i < response.length; i++) {
           if( (((response[i]).name).toLowerCase()).includes(input.toLocaleLowerCase()) && this.notInArray((response[i])._id,this.id)){
                     this.data.push(response[i]);
                     this.id.push((response[i])._id)
            }

            if( (((response[i]).address.streetAddress).toLowerCase()).includes(input.toLocaleLowerCase()) && this.notInArray((response[i])._id,this.id)){
              this.data.push(response[i]);
              this.id.push((response[i])._id)
     }
 

        }
        if(this.data.length>0){
          this.details = this.data[0];
        }
        else{
          this.details = "";
        }
       

      });

  }
  

}
