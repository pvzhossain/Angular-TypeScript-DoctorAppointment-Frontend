import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {

  // dateFilter = date => {
  //   const day = date.getDay();
  //   return day!=0 && day!=6 && day!=3;
  // }

  constructor() { }

  ngOnInit(): void {

  }

}
