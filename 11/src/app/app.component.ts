import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import {interval, map} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  private deRef = inject(DestroyRef);
  clickCount = signal(0);

  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times.`);
    });
  }

  ngOnInit(): void {
  //  const subscription = interval(3000).pipe(
  //   map((val)=> val * 2)
  //  ).subscribe({
  //      next: (val) => console.log(val)
  //   })

  // this.deRef.onDestroy(()=>{
  //     subscription.unsubscribe();
  // })
   }
  onClick(){
    this.clickCount.update(preVal => preVal + 1);
  }
  
}
