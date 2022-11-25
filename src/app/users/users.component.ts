import { Component, OnInit } from '@angular/core';
import usersdata from '../../assets/users.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userslist:any[]=usersdata;
}
