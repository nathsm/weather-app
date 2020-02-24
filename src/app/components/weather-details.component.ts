import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  OPENWEATHER_API_KEY = environment.openweather_api_key;
  model = new Weather("Singapore", 0, 0, 0, "", 0, 0);
  imageUrl = "https://www.nea.gov.sg/assets/images/map/base-853.png";
  city: string;
  country: string;
  imageurl: string;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private weatherSvc: WeatherService ) { }

  ngOnInit() {
    this.city = this.activatedRoute.snapshot.params.city;
    Object.keys(this.weatherSvc.imgMapBasedCity).find(value => {
      if (this.weatherSvc.imgMapBasedCity[value].city === this.city) {
        this.imageUrl = this.weatherSvc.imgMapBasedCity[value].imageUrl;
      }
    })
    this.weatherSvc.getWeather(this.city, this.OPENWEATHER_API_KEY)
    .then((result) => {
      this.model = new Weather(this.model.cityName, result.main.temp, 
        result.main.pressure, 
        result.main.humidity, 
        result.weather[0].description, 
        result.wind.deg, 
        result.wind.speed);
    }).catch((error) => {
      console.log(error);
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }

 

}
