import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  color="sky blue"
}
