import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystockUserComponent } from './mystock-user.component';

describe('MystockUserComponent', () => {
  let component: MystockUserComponent;
  let fixture: ComponentFixture<MystockUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
