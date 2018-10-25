import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubmittedComponent } from './contact-submitted.component';

describe('ContactSubmittedComponent', () => {
  let component: ContactSubmittedComponent;
  let fixture: ComponentFixture<ContactSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
