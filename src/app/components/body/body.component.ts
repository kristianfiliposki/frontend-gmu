import { RouterModule } from '@angular/router';
import { chart } from '../chart/chart.component';
import { Declaration } from './../../../../node_modules/@types/estree/index.d';
import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [chart,RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {


}


