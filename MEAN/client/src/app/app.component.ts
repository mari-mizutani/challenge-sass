import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private servie: AppServiceService){

  }

  ngOnInit(){

  }

  getDataFromAPI(){
    this.servie.getData().subscribe((response)=>{
      console.log('Response from API is ', response)
    },(error)=>{
      console.log('Error is ',error);
    })
  }
}
