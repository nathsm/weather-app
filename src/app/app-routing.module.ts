import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { AddCityComponent } from './components/add-city.component';
import { ListCitiesComponent } from './components/list-cities.component';
import { WeatherDetailsComponent } from './components/weather-details.component';


const routes: Routes = [
  { path: '', component: ListCitiesComponent},
  { path: 'add-city', component: AddCityComponent},
  { path: 'weather-details/:city', component:WeatherDetailsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
