import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorderUserComponent } from './listorder-user.component';

describe('ListorderUserComponent', () => {
  let component: ListorderUserComponent;
  let fixture: ComponentFixture<ListorderUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListorderUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
