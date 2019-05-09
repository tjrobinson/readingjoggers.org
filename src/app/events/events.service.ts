import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
      {
        date: new Date("2019-05-07"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-05-09"),
        time: "7pm for a 7:20pm start",
        title: "Beat your distance @ Beansheaf",
        descriptionTemplate: "beat-your-distance",
        location: "beansheaf"
      },
      {
        date: new Date("2019-05-14"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-05-16"),
        time: "7pm for a 7:20pm start",
        title:
          "High Intensity Training (HIT) or High Intensity Interval Training (HIIT) @ Beansheaf",
        descriptionTemplate: "high-intensity-training",
        location: "beansheaf"
      },
      {
        date: new Date("2019-05-21"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-05-23"),
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #3 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: new Date("2019-05-28"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: new Date("2019-05-30"),
        time: "7pm for a 7:20pm start",
        title: "Kenyan Hills @ Prospect Park",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      }
    ];
  };
}
