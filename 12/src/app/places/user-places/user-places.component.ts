import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
    // places = signal<Place[] | undefined>(undefined);
    isFetching = signal<boolean>(false);
    error = signal('');
    private deRef = inject(DestroyRef);
    private httpClient = inject(HttpClient);
    private placeService = inject(PlacesService);
    places = this.placeService.loadedUserPlaces;

  //  constructor(private httpClient1: HttpClient){};
    ngOnInit() {
      this.isFetching.set(true);
      const subscription = this.placeService.loadUserPlaces()
      .subscribe({
        // next: (placesData) => {
        //   // console.log(resData.places);
        //   this.places.set(placesData);
        // },
        error: (error: Error) =>{
          // this.isFetching.set(false);
          console.log(error);
          this.error.set(error.message);
        },
        complete:() =>{
          this.isFetching.set(false);
        }
      })
  
      this.deRef.onDestroy(()=>{
        subscription.unsubscribe();
      })
    }

    removePlace(place: Place){
      const subscription = this.placeService.removeUserPlace(place).subscribe({
        error: (error: Error) =>{
          // this.isFetching.set(false);
          console.log(error);
          this.error.set(error.message);
        },
        complete:() =>{
          this.isFetching.set(false);
        }
      })
  
      this.deRef.onDestroy(()=>{
        subscription.unsubscribe();
      })
    }
}
