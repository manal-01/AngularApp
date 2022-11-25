import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  displayval='';
  
  constructor() { }

  ngOnInit(): void {
  }

  openalert(){
    alert( "Message: "+ this.displayval + "\n" + "\n" + "Message Submited!" );

  }

  getvalue(val:string){
    console.warn(val)
    this.displayval=val
  }

  
  
  



}

