import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductdetailComponent } from './edit-productdetail.component';

describe('EditProductdetailComponent', () => {
  let component: EditProductdetailComponent;
  let fixture: ComponentFixture<EditProductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
