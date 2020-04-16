import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewproductUserComponent } from './addnewproduct-user.component';

describe('AddnewproductUserComponent', () => {
  let component: AddnewproductUserComponent;
  let fixture: ComponentFixture<AddnewproductUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewproductUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewproductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
