import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubChampionshipComponent } from './club-championship.component';

describe('ClubChampionshipComponent', () => {
  let component: ClubChampionshipComponent;
  let fixture: ComponentFixture<ClubChampionshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubChampionshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
