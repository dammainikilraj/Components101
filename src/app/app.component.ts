import { Component } from '@angular/core';
import { DataService} from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'My First Angular App';
  myObject={
    name:'Nikil',
    age:24,
    gender:'Male'
  }
  myArr=['Array Value 1','Array Value 2','Array Value 3']
  angularLogo="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
  buttonStatus = true

  myEvent(event){
    console.log(event);
  }

  helloClass = 'red-class'



constructor(private dataService:DataService){
  console.log("Nikil");
}

someProperty:string='';
myArray=[];
 ngOnInit(){
   this.myArray = this.dataService.cars;
    console.log(this.dataService.cars);

   this.someProperty = this.dataService.myData();
 }



}
