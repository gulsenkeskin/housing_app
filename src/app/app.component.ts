import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housing_app';

  housingLocationList: HousingLocation[] = [
    {
      name: "Yeni başlangıç konutu",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Geçiş Konutları",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Juneau Konutları",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      name: "Home Sweet Home",
      city: "Londra",
      state: "AK",
      photo: "../assets/housing-4.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: true,
    },
    {
      name: "Denizli Konutları",
      city: "Denizli",
      state: "IL",
      photo: "../assets/housing-5.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      name: "İstanbul Konutları",
      city: "Istanbul",
      state: "IL",
      photo: "../assets/housing-6.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
    {
      name: "Sakarya Konutları",
      city: "Sakarya",
      state: "IL",
      photo: "../assets/housing-7.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
    {
      name: "Uşak Konutları",
      city: "Uşak",
      state: "IL",
      photo: "../assets/housing-8.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  // union type: değişkenlerin birden çok tipten birini kabul etmesine izin verir
  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;

  }

  searchHousingLocations() {

  }

}
