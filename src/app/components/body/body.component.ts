import { RouterModule } from '@angular/router';
import { ChartComponent } from '../chart/chart.component';
import { Declaration } from './../../../../node_modules/@types/estree/index.d';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadLastPrice } from '../../store/gmu.actions';
import { seleGmuLastPrice } from '../../store/gmu.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ChartComponent,RouterModule,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  lastprice$: Observable<string> | undefined
  constructor(private store:Store){}
  ngOnInit() {
    this.store.dispatch(loadLastPrice());
    this.lastprice$ = this.store.select(seleGmuLastPrice);
  }


}


