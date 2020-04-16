import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  opened = false;
  
  constructor() { 
    console.log('Main constructor called');
  }

  ngOnInit(): void {
  }

}
