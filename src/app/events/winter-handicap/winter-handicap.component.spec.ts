import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterHandicapComponent } from './winter-handicap.component';

describe('WinterHandicapComponent', () => {
  let component: WinterHandicapComponent;
  let fixture: ComponentFixture<WinterHandicapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterHandicapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterHandicapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
