import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactoryComponent } from './edit-factory.component';

describe('EditFactoryComponent', () => {
  let component: EditFactoryComponent;
  let fixture: ComponentFixture<EditFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
