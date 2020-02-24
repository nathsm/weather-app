import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  { ReactiveFormsModule, FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';

import  { MaterialModule } from './material.module';
import  { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// import components
import { AddCityComponent } from './components/add-city.component';
import { ListCitiesComponent } from './components/list-cities.component';
import { WeatherDetailsComponent } from './components/weather-details.component';

// services
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCityComponent,
    ListCitiesComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
