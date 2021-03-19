import { Component, OnInit } from '@angular/core';

import * as moment from "moment"; // Import moment js

@Component({
  selector: 'app-chooseslot3',
  templateUrl: './chooseslot3.component.html',
  styleUrls: ['./chooseslot3.component.css']
})
export class Chooseslot3Component implements OnInit {
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

// Time slot of 15 minutes (Monday)  - Moment js
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
  timeSlots2 = this.getTimeStops2('09:00', '11:00') //Start & End Time


// Time slot of 15 minutes (Thursday)  - Moment js
  getTimeStops3(start: any, end: any) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    var timeSlots3 = [];
    while (startTime <= endTime) {
      timeSlots3.push(moment(startTime).format('HH:mm'));
      startTime.add(15, 'minutes');
    }
    return timeSlots3;
  }
  timeSlots3 = this.getTimeStops2('11:00', '14:00') //Start & End Time


  constructor() { }

  ngOnInit(): void {
  }

}
