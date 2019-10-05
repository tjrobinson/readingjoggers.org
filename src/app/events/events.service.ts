import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";
import { ClubRunsAndTrainingComponent } from "./club-runs-and-training/club-runs-and-training.component";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[



      {
        date: new Date("2019-10-10"),
        time: "7pm for a 7:20pm start",
        title: "500m 1000m 1500m 1000m 500m  - Up and down Pyramid @ Lansdowne Road / Grafton Road Circuit",
        descriptionTemplate: "500m-1000m-1500m-pyramid",
        location: "other-locations"
      },
      {
        date: new Date("2019-10-17"),
        time: "7pm for a 7:20pm start",
        title: "Up and Down @ Prospect Park",
        descriptionTemplate: "up-and-down-session-a",
        location: "prospect-park"
      },
      {
        date: new Date("2019-10-24"),
        time: "7pm for a 7:20pm start",
        title: "Beat your distance @ Old Bath Road, Theale",
        descriptionTemplate: "beat-your-distance-theale",
        location: "theale"
      },



      // {
      //   date: new Date("2019-08-01"),
      //   time: "7pm for a 7:20pm start",
      //   title: "High Intensity Training (HIT) or High Intensity Interval Training (HIIT) @ Beansheaf",
      //   descriptionTemplate: "high-intensity-training-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-08-06"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-08-08"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Oregon or Complex Trail @ Beansheaf",
      //   descriptionTemplate: "oregon",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-08-13"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-08-15"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Summer Handicap #7 (5 Miles) @ Prospect Park",
      //   descriptionTemplate: "summer-handicap",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-08-20"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-08-22"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Kenyan Hills @ Prospect Park",
      //   descriptionTemplate: "kenyan-hills",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-08-27"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-08-29"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Zig Zag Runs @ Beansheaf",
      //   descriptionTemplate: "zig-zag-runs",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-09-03"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-09-05"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Summer Handicap #8 (2.5 Miles) @ Prospect Park",
      //   descriptionTemplate: "summer-handicap",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-09-10"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-09-12"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Beat Your Distance @ Beansheaf",
      //   descriptionTemplate: "beat-your-distance-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-09-17"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-09-19"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Three Minute Cycle @ Prospect Park",
      //   descriptionTemplate: "three-minute-cycle",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-09-24"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Prospect Park",
      //   descriptionTemplate: "club-run-prospect-park",
      //   location: "prospect-park"
      // },
      // {
      //   date: new Date("2019-09-26"),
      //   time: "7pm for a 7:20pm start",
      //   title: "800m Intervals @ Beansheaf",
      //   descriptionTemplate: "800m-intervals",
      //   location: "beansheaf"
      // },
      // {
      //   date: new Date("2019-10-01"),
      //   time: "7pm for a 7:20pm start",
      //   title: "Club run @ Beansheaf",
      //   descriptionTemplate: "club-run-beansheaf",
      //   location: "beansheaf"
      // }
    ];
  };
}
