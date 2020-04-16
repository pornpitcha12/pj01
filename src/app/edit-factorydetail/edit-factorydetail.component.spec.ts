import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactorydetailComponent } from './edit-factorydetail.component';

describe('EditFactorydetailComponent', () => {
  let component: EditFactorydetailComponent;
  let fixture: ComponentFixture<EditFactorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFactorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
