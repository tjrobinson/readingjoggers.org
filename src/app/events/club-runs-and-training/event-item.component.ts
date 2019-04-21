import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from "./IEvent";

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.descriptionTemplateUrl = './events/club-runs-and-training/templates/' + this.event.descriptionTemplate + '.md';
  }

  @Input() event: IEvent;

  descriptionTemplateUrl: string;

}
