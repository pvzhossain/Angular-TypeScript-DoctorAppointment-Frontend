import { Component } from '@angular/core';

import doctors from 'src/app/jsonData/doctordata.json';

@Component({
  selector: 'app-root',

  template: '<app-header></app-header><router-outlet></router-outlet>',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'squareAppointment';

}
