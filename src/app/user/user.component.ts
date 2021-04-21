import { Component, OnInit, Input } from '@angular/core';

interface Employee {
  name: string;
  age: number;
  email: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: Employee = {
    name: '',
    age: 1,
    email: ''
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
