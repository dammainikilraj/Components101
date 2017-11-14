import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
 
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  myNewObj = {
    name:'Srilatha',
    age:29,
    gender:'Female'
  }

}
