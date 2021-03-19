import { Component, OnInit } from '@angular/core';

import * as moment from "moment";

@Component({
  selector: 'app-chooseslot2',
  templateUrl: './chooseslot2.component.html',
  styleUrls: ['./chooseslot2.component.css']
})
export class Chooseslot2Component implements OnInit {

  // Time slot of 15 minutes (Tuesday) - Moment js
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
  timeSlots = this.getTimeSlot('06:00', '09:00') //Start & End Time


// Time slot of 15 minutes (Friday)  - Moment js
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
  timeSlots2 = this.getTimeStops2('10:00', '12:00') //Start & End Time

  constructor() { }

  ngOnInit(): void {
  }

}
