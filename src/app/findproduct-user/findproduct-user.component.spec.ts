import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindproductUserComponent } from './findproduct-user.component';

describe('FindproductUserComponent', () => {
  let component: FindproductUserComponent;
  let fixture: ComponentFixture<FindproductUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindproductUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindproductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
