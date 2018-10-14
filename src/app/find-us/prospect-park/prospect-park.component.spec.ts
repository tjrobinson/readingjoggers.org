import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectParkComponent } from './prospect-park.component';

describe('ProspectParkComponent', () => {
  let component: ProspectParkComponent;
  let fixture: ComponentFixture<ProspectParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
