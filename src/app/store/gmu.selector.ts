// store/gmu.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GmuState } from './gmu.reducer';

export const selectGmuState = createFeatureSelector<GmuState>('gmu');

export const selectGmuData = createSelector(
  selectGmuState,
  (state: GmuState) => state.data,
);

export const seleGmuLastPrice = createSelector(
  selectGmuState,
  (state: GmuState) => state.lastprice,
);
