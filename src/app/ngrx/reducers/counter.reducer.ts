import { createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return state + 1;
  }),
  on(CounterActions.decrement, (state) => {
    return state - 1;
  }),
  on(CounterActions.reset, () => {
    return 0;
  })
);
