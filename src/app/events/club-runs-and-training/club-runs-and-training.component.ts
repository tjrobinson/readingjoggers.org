import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { IEvent } from './IEvent';

@Component({
  selector: 'app-club-runs-and-training',
  templateUrl: './club-runs-and-training.component.html'
})
export class ClubRunsAndTrainingComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  events: IEvent[];
}