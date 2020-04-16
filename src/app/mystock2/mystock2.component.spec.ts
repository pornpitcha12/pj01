import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mystock2Component } from './mystock2.component';

describe('Mystock2Component', () => {
  let component: Mystock2Component;
  let fixture: ComponentFixture<Mystock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mystock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mystock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
