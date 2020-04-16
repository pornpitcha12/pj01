import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FindNameComponent } from './find-name.component';

describe('FindNameComponent', () => {
  let component: FindNameComponent;
  let fixture: ComponentFixture<FindNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-findproduct',
  templateUrl: './findproduct.component.html',
  styleUrls: ['./findproduct.component.css']
})

// export class FindproductComponent implements OnInit {
//   product_name: string;
//   title = 'project';
//   product = '';

//   constructor(private http: HttpClient, private router: Router) { }



//   onSearch() {
//     this.router.navigateByUrl('/find-name', {state: {name: this.product_name}});
//   }

//   ngOnInit() {
//   }

// }