import { Injectable } from "@angular/core";
import { IEvent } from "./club-runs-and-training/IEvent";
import { ClubRunsAndTrainingComponent } from "./club-runs-and-training/club-runs-and-training.component";

@Injectable()
export class EventsService {
  constructor() {}

  getEvents = () => {
    return <IEvent[]>[
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
        date: new Date("2019-06-13"),
        time: "7pm for a 7:20pm start",
        title: "Oregon or Complex Trail @ Beansheaf",
        descriptionTemplate: "oregon",
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
        date: new Date("2019-06-20"),
        time: "7pm for a 7:20pm start",
        title: "Kenyan Hills @ Prospect Park",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      },
      {
        date: new Date("2019-06-25"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      },
      {
        date: new Date("2019-06-27"),
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #5 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: new Date("2019-07-02"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-07-04"),
        time: "7pm for a 7:20pm start",
        title: "Zig Zag Runs @ Beansheaf",
        descriptionTemplate: "zig-zag-runs",
        location: "beansheaf"
      },

      {
        date: new Date("2019-07-09"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-07-11"),
        time: "7pm for a 7:20pm start",
        title: "Beat Your Distance @ Beansheaf",
        descriptionTemplate: "beat-your-distance-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-07-16"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-07-18"),
        time: "7pm for a 7:20pm start",
        title: "Kenyan Hills @ Prospect Park",
        descriptionTemplate: "kenyan-hills",
        location: "prospect-park"
      },
      {
        date: new Date("2019-07-23"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Beansheaf",
        descriptionTemplate: "club-run-beansheaf",
        location: "beansheaf"
      },
      {
        date: new Date("2019-07-25"),
        time: "7pm for a 7:20pm start",
        title: "Summer Handicap #6 (5 Miles) @ Prospect Park",
        descriptionTemplate: "summer-handicap",
        location: "prospect-park"
      },
      {
        date: new Date("2019-07-30"),
        time: "7pm for a 7:20pm start",
        title: "Club run @ Prospect Park",
        descriptionTemplate: "club-run-prospect-park",
        location: "prospect-park"
      }
    ];
  };
}
