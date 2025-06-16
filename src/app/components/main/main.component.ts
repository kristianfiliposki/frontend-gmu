import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadLastPrice } from '../../store/gmu.actions';
import { seleGmuLastPrice } from '../../store/gmu.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,ChartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  lastprice$: Observable<string> | undefined
    constructor(private store:Store){}
    ngOnInit() {
      this.store.dispatch(loadLastPrice());
      this.lastprice$ = this.store.select(seleGmuLastPrice);
    }
}
