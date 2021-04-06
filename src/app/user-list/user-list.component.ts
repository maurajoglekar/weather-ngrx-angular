import { Component, OnInit, Input } from '@angular/core';

interface Employee {
  name: string;
  age: number;
  email: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() employees:Employee[]= []
  constructor() { }

  ngOnInit(): void {
    console.log(this.employees);
  }

}
