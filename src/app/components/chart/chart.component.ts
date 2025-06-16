import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle, ApexTooltip } from 'ng-apexcharts';
import { Store } from '@ngrx/store';
import { loadGmuData5m } from '../../store/gmu.actions';
import { selectGmuData } from '../../store/gmu.selector';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadGmuData5m());

    this.store.select(selectGmuData).subscribe((data) => {
      if (!data) return;

      const seriesData = data.map(item => ({
        x: new Date(item.timestamp),
        y: item.gmu_value
      }));

      this.chartOptions = {
        series: [{
          name: 'GMU Value',
          data: seriesData
        }],
        chart: {
          type: 'line',
          height: 250,
          zoom: {
            enabled: false
          },
          foreColor: '#FFFFFF' // 👈 rende bianchi tutti i testi (default)
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: '#FFFFFF' // 👈 etichette asse X bianche
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#FFFFFF' // 👈 etichette asse Y bianche
            }
          },
          title: {
            text: 'GMU Value',
            style: {
              color: '#FFFFFF' // 👈 titolo asse Y bianco
            }
          }
        },
        tooltip: {
          x: {
            format: 'yyyy-MM-dd HH:mm:ss'
          },

        },
        title: {
          text: 'GMU Data Over Time',
          style: {
            color: '#FFFFFF' // 👈 titolo bianco
          }
        }
      };

    });
  }
}
