import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from "./IEvent";
import { format } from "date-fns";

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.formattedDate = format(this.event.date, "dddd Do MMMM yyyy")

    this.descriptionTemplateUrl = './data/events/templates/' + this.event.descriptionTemplate + '.md';
  }

  @Input() event: IEvent;

  descriptionTemplateUrl: string;

  formattedDate: string;

}
