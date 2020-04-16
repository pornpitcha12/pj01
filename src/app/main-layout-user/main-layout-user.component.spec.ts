import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutUserComponent } from './main-layout-user.component';

describe('MainLayoutUserComponent', () => {
  let component: MainLayoutUserComponent;
  let fixture: ComponentFixture<MainLayoutUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
