import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() { }

  getEvents = () => {
    return <IEvent[]>[
      // {
      //   date: new Date("2019-11-12"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club Run (Check Facebook) @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-11-14"),
      //   time: "7pm for a 7:20pm start",
      //   title: "500m Scorpions @ Lansdowne Road / Grafton Road Circuit",
      //   descriptionTemplate: "500m-scorpions"
      // },
      // {
      //   date: new Date("2019-11-19"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-11-21"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Up and Down @ Prospect Park",
      //   descriptionTemplate: "up-and-down-session-b",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-11-24"),
      //   time: "9:20am",
      //   title: "Winter Handicap #2",
      //   descriptionTemplate: "winter-handicap"
      // },
      // {
      //   date: new Date("2019-11-26"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-11-28"),
      //   time: "7pm for a 7:20pm start",
      //   title: "800m Intervals @ Beansheaf",
      //   descriptionTemplate: "800m-intervals",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-12-03"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-12-05"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Three Minute Cycle @ Prospect Park",
      //   descriptionTemplate: "three-minute-cycle",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-12-10"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      {
        date: new Date("2019-12-12"),
        time: "7pm for a 7:20pm start",
        title: "High Intensity Training (HIT) or High Intensity Interval Training (HIIT) @ Theale",
        descriptionTemplate: "high-intensity-training-theale",
        location: "theale"
      },
      {
        date: new Date("2019-12-17"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: new Date("2019-12-19"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: new Date("2019-12-24"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf (TBC)",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-12-26"),
        title: "No Session"
      },
      {
        date: new Date("2019-12-31"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park (TBC)",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      }
    ];
  };
}
