import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailproductUserComponent } from './editdetailproduct-user.component';

describe('EditdetailproductUserComponent', () => {
  let component: EditdetailproductUserComponent;
  let fixture: ComponentFixture<EditdetailproductUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdetailproductUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetailproductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
