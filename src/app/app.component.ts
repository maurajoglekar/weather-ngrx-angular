import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}



const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alerts!: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  
  title = 'tutorial';
  appName = 'youtube app'
  name = "Bruce"
  getName(){
    return `Hello ${this.name}`
  }
  currentValue=""
  getValue(val: string){
    console.log(val)
    this.currentValue = val;
  }
  obj={
    name: 'Kelly',
    age: 20
  }
  arr = ['avni', 'josh', 'jayant']
  siteUrl=window.location.href
  myName='Jayant'
  getNameWithButton(newname: string) {
    alert(newname);
  }
  myEvent(evt: string){
    console.log(evt);
  }
  disabledBox = true;
  enableBox(){
     this.disabledBox = false;
  }
  show="green"
  color="blue"
  employees=[
    {
      name: 'Kelly',
      age: 20,
      email: 'test@gmail.com'
    },
    {
      name: 'John',
      age: 26,
      email: 'test@gmail.com'
    },
    {
      name: 'Mary',
      age: 19,
      email: 'test@gmail.com'
    }
  ]
  getValues(val: object) {
    console.log(val)
  }
  err=true
  updateColor(){
    this.err = !this.err;
  }
  data="bruce"

}
