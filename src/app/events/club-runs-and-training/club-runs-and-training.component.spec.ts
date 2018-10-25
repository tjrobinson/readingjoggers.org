import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRunsAndTrainingComponent } from './club-runs-and-training.component';

describe('ClubRunsAndTrainingComponent', () => {
  let component: ClubRunsAndTrainingComponent;
  let fixture: ComponentFixture<ClubRunsAndTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubRunsAndTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRunsAndTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
