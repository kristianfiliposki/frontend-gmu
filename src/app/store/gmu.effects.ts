import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GmuService } from "../service/gmu.service";
import { loadGmuData5m, loadGmuDataFailure5m, loadGmuDataSuccess5m, loadLastPrice, loadLastPriceFailure, loadLastPriceSuccess} from './gmu.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

@Injectable()
export class GmuEffects {
  loadGmu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGmuData5m),
      mergeMap(() =>
        this.gmuService.getGmu5m().pipe(
          map(data => loadGmuDataSuccess5m({ data })),
          catchError(error => of(loadGmuDataFailure5m({ error })))
        )
      )
    )
  );

  loadLastPrice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLastPrice),
      mergeMap(() =>
        this.gmuService.getGmu().pipe(
          map(price => loadLastPriceSuccess({ price })),
          catchError(error => of(loadLastPriceFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private gmuService: GmuService) {}
}
