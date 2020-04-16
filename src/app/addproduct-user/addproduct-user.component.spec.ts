import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductUserComponent } from './addproduct-user.component';

describe('AddproductUserComponent', () => {
  let component: AddproductUserComponent;
  let fixture: ComponentFixture<AddproductUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
