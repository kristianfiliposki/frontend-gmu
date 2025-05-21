import { createReducer, on } from '@ngrx/store';
import { loadGmuData5m, loadGmuDataSuccess5m, loadLastPrice, loadLastPriceSuccess } from './gmu.actions';

export interface GmuState {
  data: any[];
  lastprice:string;
  error: any;
}

export const initialState: GmuState = {
  data: [],
  lastprice:"",
  error: null
};

export const gmuReducer = createReducer(
  initialState,
  on(loadGmuDataSuccess5m, (state, { data }) => ({ ...state, data })),
  on(loadLastPriceSuccess, (state, { price }) => ({ ...state, lastprice: price }))


);
