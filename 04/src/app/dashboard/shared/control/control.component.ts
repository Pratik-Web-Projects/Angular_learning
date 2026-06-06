import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{ 
    class: 'control',
    '(click)': 'onClick()'
  } 
  // prefered approach
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; //backward compatiblity reason exist
  // @HostListener('click') onClick(){
  // }

  label = input.required<string>(); 
  private el = inject(ElementRef)

  onClick(){
    console.log('clicked');
    console.log(this.el);
  }
}
