import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent,BodyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
