import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,BodyComponent,NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'global-money-index';
}
