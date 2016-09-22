import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';

interface AppState {
  counter: number;
}

// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/Observable/interval';
// import 'rxjs/add/Observable/fromEvent';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter;
  clock;

  click$ = new Subject();

  constructor(store: Store<AppState>) {
    this.counter = store.select('counter')
    this.clock =
      Observable.merge(
        this.click$,
        Observable.interval(5000)
      )
      .do(()=>{ store.dispatch({type:INCREMENT})})
      .map(() => new Date())
  }
}