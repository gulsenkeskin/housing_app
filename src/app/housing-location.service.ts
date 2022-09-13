import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { LOCATIONS } from './mock-locations';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {

  constructor() { }

  getHousingLocations(): HousingLocation[] {
    return LOCATIONS;
  }
}
