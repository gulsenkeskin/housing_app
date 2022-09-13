import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  //? Input dekoratörü, bir componentin bir template'ten değer almasına izin verir. 

  @Input() locationList: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  searchHousingLocations(searchText: string) {
    console.log(searchText);
  }

}
