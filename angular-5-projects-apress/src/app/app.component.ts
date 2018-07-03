import { Component } from "@angular/core";
import * as Rx from "rxjs";
@Component({
  selector: "app-root",
  template: `
  `,
  styles: []
})
export class AppComponent {
  title = "app";

  testSimpleObservable() {
    const array: Array<string> = ["event1", "event2"];
    const observable: Rx.Observable<string[]> = Rx.Observable.of(array);
    const subscription: Rx.Subscription = observable.subscribe(
      // Observer
      function(x) {
        console.log("Next: " + x);
      },
      function(err) {
        console.log("Error: " + err);
      },
      function() {
        console.log("Completed");
      }
    );
  }

  testRange() {
    const observable: Rx.Observable<number> = Rx.Observable.range(0, 100);
    const subscription: Rx.Subscription = observable.subscribe(
      // Observer
      val => {
        console.log(`Next: ${val}`);
      },
      err => {
        console.log(`Error: ${err}`);
      },
      () => {
        console.log(`Completed`);
      }
    );
  }
  constructor() {
    //this.testSimpleObservable();
    this.testRange();
  }
}
