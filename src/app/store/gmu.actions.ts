// store/gmu.actions.ts
import { createAction, props } from '@ngrx/store';
import { GmuDailySummary } from "../interfaces/chars"

export const loadGmuData5m = createAction('[GMU] Load Data');
export const loadGmuDataSuccess5m = createAction('[GMU] Load Data Success', props<{ data: GmuDailySummary[] }>());
export const loadGmuDataFailure5m = createAction('[GMU] Load Data Failure', props<{ error: any }>());

export const loadLastPrice = createAction('[GMU] loadLastPrice');
export const loadLastPriceSuccess = createAction('[GMU] loadLastPrice Success', props<{ price: string }>());
export const loadLastPriceFailure = createAction('[GMU] loadLastPrice Failure', props<{ error: any }>());
