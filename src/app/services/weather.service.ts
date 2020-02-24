import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  countries = [
    { countryName: 'China', city: 'Beijing' },
    { countryName: 'India', city: 'New Delhi' },
    { countryName: 'Malaysia', city: 'Kuala Lumpur' },
    { countryName: 'Singapore', city: 'Singapore' },
    { countryName: 'China', city: 'Nanjing' },
  ];

  imgMapBasedCity = [
    {
      city: 'Singapore',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Singapore_in_its_region_%28zoom%29.svg/280px-Singapore_in_its_region_%28zoom%29.svg.png'
    },
    {
      city: 'Kuala Lumpur',
      imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Malaysia_location_map.svg/250px-Malaysia_location_map.svg.png`},
    {
      city: 'Beijing',
      imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beijing_in_China_%28%2Ball_claims_hatched%29.svg/250px-Beijing_in_China_%28%2Ball_claims_hatched%29.svg.png`},
    {
      city: 'Nanjing',
      imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/China_Jiangsu_adm_location_map.svg/250px-China_Jiangsu_adm_location_map.svg.png`},
    {
      city: 'New Delhi',
      imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Location_map_India_Delhi_EN.svg/300px-Location_map_India_Delhi_EN.svg.png`}
  ];

  constructor(private httpSvc : HttpClient) { }

  getWeather(city: string, apiKey: string): Promise<any> {
    const params = new HttpParams()
      .set("q", city)
      .set('appid', apiKey);

    return this.httpSvc.get(environment.api_url, {params: params})
      .toPromise();
  }

  addCity(city: City){
    this.countries.push({ countryName: city.country, city: city.cityName});
    this.countries.sort((a, b) => (a.countryName > b.countryName) ? 1 : -1);
    this.imgMapBasedCity.push({ city: city.cityName, imageUrl: 
      `${city.imageurl}` });
  }
}
