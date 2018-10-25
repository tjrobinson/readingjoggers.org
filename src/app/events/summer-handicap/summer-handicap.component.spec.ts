import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerHandicapComponent } from './summer-handicap.component';

describe('SummerHandicapComponent', () => {
  let component: SummerHandicapComponent;
  let fixture: ComponentFixture<SummerHandicapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerHandicapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerHandicapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
