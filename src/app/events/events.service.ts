import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
      {
        date: "Tuesday 23rd April 2019",
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: "Thursday 25th April 2019",
        time: "7pm for a 7:20pm start",
        title: "Training - Kenyan Hills",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      },
      {
        date: "Tuesday 30th April 2019",
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: "Thursday 2nd May 2019",
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #2 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: "Tuesday 7th May 2019",
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
    ];
  };
}
