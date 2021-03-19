import { Component, OnInit } from '@angular/core';

import * as moment from "moment";

@Component({
  selector: 'app-choosedate3',
  templateUrl: './choosedate3.component.html',
  styleUrls: ['./choosedate3.component.css']
})
export class Choosedate3Component implements OnInit {
    // inactive unavailable days (Material Datepicker)
  dateFilter = date => {
    const day = date.getDay();
    return day!=2 && day!=3 && day!=5 && day!=6;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
