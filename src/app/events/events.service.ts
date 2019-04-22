import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
      {
        date: new Date("2019-04-23"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-04-25"),
        time: "7pm for a 7:20pm start",
        title: "Training - Kenyan Hills",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      },
      {
        date: new Date("2019-04-30"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: new Date("2019-05-02"),
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #2 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: new Date("2019-05-07"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
    ];
  };
}
