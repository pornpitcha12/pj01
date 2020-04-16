import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindImageUserComponent } from './find-image-user.component';

describe('FindImageUserComponent', () => {
  let component: FindImageUserComponent;
  let fixture: ComponentFixture<FindImageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindImageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindImageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
