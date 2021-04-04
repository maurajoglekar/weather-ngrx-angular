import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  appName = 'youtube app'
  name = "Maura"
  getName(){
    return `Hello ${this.name}`
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
}
