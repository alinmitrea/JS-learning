///<reference path="../../node_modules/angularfire2/database/firebase_list_observable.d.ts"/>
import { Component } from '@angular/core';
import {database, initializeApp} from 'firebase';
import {FirebaseApp} from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  firstCourse: any;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('courses');
    this.lesson$ = db.object('lessons/-L3n8zK5B6kaXzl7LfMF');
    this.courses$.subscribe(console.log);
    this.lesson$.subscribe(console.log);
    this.courses$.map(courses => courses[0])
        .subscribe(
            course => this.firstCourse = course
        );
  }

  listPush() {
      this.courses$.push({description: 'Test new course2'})
          .then(
              () => console.log('List Push Done2'),
              console.error
          );
  }

  listRemove() {
      this.courses$.remove(this.firstCourse);
  }
}
