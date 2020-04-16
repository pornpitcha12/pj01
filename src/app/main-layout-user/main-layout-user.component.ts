import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout-user',
  templateUrl: './main-layout-user.component.html',
  styleUrls: ['./main-layout-user.component.css']
})
export class MainLayoutUserComponent implements OnInit {

  opened = false;
  
  constructor() { 
    console.log('Main constructor called');
  }

  ngOnInit(): void {
  }

}