import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from "./IEvent";
import * as format from "date-fns/format";

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.formattedDate = format(this.event.date, "dddd Do MMMM YYYY")

    this.descriptionTemplateUrl = './data/events/templates/' + this.event.descriptionTemplate + '.md';
  }

  @Input() event: IEvent;

  descriptionTemplateUrl: string;

  formattedDate: string;

}
