import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductUserComponent } from './editproduct-user.component';

describe('EditproductUserComponent', () => {
  let component: EditproductUserComponent;
  let fixture: ComponentFixture<EditproductUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
