import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number> = this.store.select('count');
  count: number = 0;

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$.subscribe((count) => {
      this.count = count;
      console.log(this.count);
    });
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(CounterActions.reset());
  }
}
