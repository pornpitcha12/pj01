import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindproductComponent } from './findproduct.component';

describe('FindproductComponent', () => {
  let component: FindproductComponent;
  let fixture: ComponentFixture<FindproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
