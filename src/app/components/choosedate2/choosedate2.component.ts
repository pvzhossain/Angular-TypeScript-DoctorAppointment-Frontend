import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosedate2',
  templateUrl: './choosedate2.component.html',
  styleUrls: ['./choosedate2.component.css']
})
export class Choosedate2Component implements OnInit {
  // inactive unavailable days (Material Datepicker)
  dateFilter = date => {
    const day = date.getDay();
    return day!=0 && day!=1 && day!=3 && day!=4 && day!=6;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
