import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


