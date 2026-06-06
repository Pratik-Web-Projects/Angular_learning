import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';

@Component({
  selector: 'app-new-ticekt',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticekt.component.html',
  styleUrl: './new-ticekt.component.css'
})
export class NewTicektComponent {

}
