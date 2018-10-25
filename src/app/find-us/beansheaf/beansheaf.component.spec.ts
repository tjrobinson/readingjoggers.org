import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansheafComponent } from './beansheaf.component';

describe('BeansheafComponent', () => {
  let component: BeansheafComponent;
  let fixture: ComponentFixture<BeansheafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeansheafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeansheafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
