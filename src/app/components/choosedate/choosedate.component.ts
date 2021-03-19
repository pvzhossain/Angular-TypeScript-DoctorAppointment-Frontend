import { Component, OnInit } from '@angular/core';

// import doctors from 'src/app/jsonData/doctordata.json';

@Component({
  selector: 'app-choosedate',
  templateUrl: './choosedate.component.html',
  styleUrls: ['./choosedate.component.css']
})
export class ChoosedateComponent implements OnInit {

  // inactive unavailable days (Material Datepicker)
  dateFilter = date => {
    const day = date.getDay();
    return day!=1 && day!=2 && day!=4 && day!=5 && day!=6;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
