import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { LOCATIONS } from './mock-locations';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {

  constructor() { }

  getHousingLocations(): Observable<HousingLocation[]> {
    const housingLocationList = of(LOCATIONS);
    return housingLocationList;
  }

  // getHousingLocations(): HousingLocation[] {
  //   return LOCATIONS;
  // }
}
