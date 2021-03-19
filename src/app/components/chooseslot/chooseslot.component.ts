import { Component, OnInit } from '@angular/core';

import * as moment from "moment"; //Import moment js

@Component({
  selector: 'app-chooseslot',
  templateUrl: './chooseslot.component.html',
  styleUrls: ['./chooseslot.component.css']
})
export class ChooseslotComponent implements OnInit {
  // Time slot of 15 minutes (Sunday)  - Moment js
  getTimeSlot(start: any, end: any) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    var timeSlots = [];
    while (startTime <= endTime) {
      timeSlots.push(moment(startTime).format('HH:mm'));
      startTime.add(15, 'minutes');
    }
    return timeSlots;
  }
  timeSlots = this.getTimeSlot('10:00', '18:00') //Start & End Time


// Time slot of 15 minutes (Wednesday)  - Moment js
  getTimeStops2(start: any, end: any) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    var timeSlots2 = [];
    while (startTime <= endTime) {
      timeSlots2.push(moment(startTime).format('HH:mm'));
      startTime.add(15, 'minutes');
    }
    return timeSlots2;
  }
  timeSlots2 = this.getTimeStops2('06:00', '09:00') //Start & End Time


  constructor() { }

  ngOnInit(): void {
  }

}
