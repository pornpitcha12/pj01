import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mystock2UserComponent } from './mystock2-user.component';

describe('Mystock2UserComponent', () => {
  let component: Mystock2UserComponent;
  let fixture: ComponentFixture<Mystock2UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mystock2UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mystock2UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
