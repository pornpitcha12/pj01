import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingUserComponent } from './billing-user.component';

describe('BillingUserComponent', () => {
  let component: BillingUserComponent;
  let fixture: ComponentFixture<BillingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
