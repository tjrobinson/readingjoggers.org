import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
      // {
      //   date: new Date("2020-01-07"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-01-09"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Three Minute Cycle @ Prospect Park",
      //   descriptionTemplate: "three-minute-cycle",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-01-12"),
      //   time: "9am for 9:20am start",
      //   title: "Winter Handicap #3",
      //   descriptionTemplate: "winter-handicap"
      // },
      // {
      //   date: new Date("2020-01-14"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-01-16"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Beat your Distance @ Theale",
      //   descriptionTemplate: "beat-your-distance-theale",
      //   location: "theale"
      // },
      // {
      //   date: new Date("2020-01-21"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-01-23"),
      //   time: "7pm for a 7:20pm start",
      //   title: "1000m Scorpions @ Lansdowne Road / Grafton Road Circuit",
      //   descriptionTemplate: "1000m-scorpions",
      //   location: "lansdowne-road"
      // },
      // {
      //   date: new Date("2020-01-28"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club Run & Summer Handicap Awards @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-01-30"),
      //   time: "7pm for a 7:20pm start",
      //   title:
      //     "High Intensity Training (HIT) or High Intensity Interval Training (HIIT) @ Theale",
      //   descriptionTemplate: "high-intensity-training-theale",
      //   location: "theale"
      // },
      // {
      //   date: new Date("2020-02-02"),
      //   time: "9am for 9:20am start",
      //   title: "Winter Handicap #4",
      //   descriptionTemplate: "winter-handicap"
      // },
      // {
      //   date: new Date("2020-02-04"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-02-06"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Up and Down @ Prospect Park",
      //   descriptionTemplate: "up-and-down-session-a",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-02-11"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-02-13"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Three Minute Cycle @ Prospect Park",
      //   descriptionTemplate: "three-minute-cycle",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-02-18"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-02-20"),
      //   time: "7pm for a 7:20pm start",
      //   title: "800m Intervals @ Beansheaf",
      //   descriptionTemplate: "800m-intervals",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-02-25"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-02-27"),
      //   time: "7pm for a 7:20pm start",
      //   title:
      //     "500m 1000m 1500m 1000m 500m - Up and Down Pyramid @ Lansdowne Road / Grafton Road Circuit",
      //   descriptionTemplate: "500m-1000m-1500m-pyramid",
      //   location: "lansdowne-road"
      // },
      // {
      //   date: new Date("2020-03-03"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-03-05"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Up and Down @ Prospect Park",
      //   descriptionTemplate: "up-and-down-session-b",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-03-08"),
      //   time: "9am for 9:20am start",
      //   title: "Winter Handicap #5",
      //   descriptionTemplate: "winter-handicap"
      // },
      // {
      //   date: new Date("2020-03-10"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-03-12"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Beat your Distance @ Theale",
      //   descriptionTemplate: "beat-your-distance-theale",
      //   location: "theale"
      // },
      // {
      //   date: new Date("2020-03-17"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-03-19"),
      //   time: "7pm for a 7:20pm start",
      //   title: "400m - 800m Intervals @ Beansheaf",
      //   descriptionTemplate: "400m-800m-intervals",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-03-24"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2020-03-26"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Fitness Test @ Prospect Park",
      //   descriptionTemplate: "fitness-test",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2020-03-29"),
      //   time: "9am for 9:20am start",
      //   title: "Winter Handicap #6",
      //   descriptionTemplate: "winter-handicap"
      // },
      // {
      //   date: new Date("2020-03-31"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // }
    ];
  };
}
