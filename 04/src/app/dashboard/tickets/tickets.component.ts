import { Component } from '@angular/core';
import { NewTicektComponent } from './new-ticekt/new-ticekt.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicektComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
