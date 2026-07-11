import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal('');
  private deRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);
  private placesService = inject(PlacesService);

  //  constructor(private httpClient1: HttpClient){};
  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces()
    .subscribe({
      next: (placesData) => {
        // console.log(resData.places);
        this.places.set(placesData);
      },
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

  onSelectPlace(selectedPlace: Place){
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next: (resData) => console.log(resData),
    });

    this.deRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  }
