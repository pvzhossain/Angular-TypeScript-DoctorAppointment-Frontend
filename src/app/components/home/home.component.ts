import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import doctors from 'src/app/jsonData/doctordata.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doctorsData:{name:string,org:string,availibility:object ,visitDurationInMin:number,}[]=doctors;
  constructor() { }

  ngOnInit(): void {
  }

}
