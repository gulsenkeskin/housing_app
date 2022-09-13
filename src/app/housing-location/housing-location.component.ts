import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {

  @Input() selectedLocation: HousingLocation | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
