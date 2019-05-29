import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
      {
        date: new Date("2019-05-30"),
        time: "7pm for a 7:20pm start",
        title: "Kenyan Hills @ Prospect Park",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      },
      {
        date: new Date("2019-06-04"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-06-06"),
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #4 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: new Date("2019-06-11"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-06-18"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-06-25"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      }
    ];
  };
}
