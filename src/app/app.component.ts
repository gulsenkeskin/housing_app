import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from './housing-location';
import { LOCATIONS } from './mock-locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housing_app';

  housingLocationList: HousingLocation[] = LOCATIONS;

  // union type: değişkenlerin birden çok tipten birini kabul etmesine izin verir
  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;

  }

  searchHousingLocations() {

  }

}
