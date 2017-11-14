import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars=['BMW','Audi','Bunki','Ford'];

  myData(){
    return "This is a my data, man!";
  }

}
