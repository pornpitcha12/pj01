import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeedetailComponent } from './edit-employeedetail.component';

describe('EditEmployeedetailComponent', () => {
  let component: EditEmployeedetailComponent;
  let fixture: ComponentFixture<EditEmployeedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
