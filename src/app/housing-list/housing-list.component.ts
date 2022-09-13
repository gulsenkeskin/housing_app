import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  //? Input dekoratörü, bir componentin bir template'ten değer almasına izin verir. 

  @Input() locationList: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  //?Bir kullanıcı listeden bir konumu tıkladığında locationSelectedEvent'i tetiklememiz gerekir.

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }



  //results kullanıcının arama sonucuyla eşlen konut dizisini temsil eder
  results: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        ));
  }

}



//?Angular'da, @Input() ebeveynden çocuğa veri gönderirken 
//? @Output(), componentlerin alt componentden üst componente veri içeren bir olay göndermesine izin verir.

//? Output dekoratörü, dinleyicileri herhangi bir olay hakkında bilgilendirmek için bir EventEmitter kullanır.