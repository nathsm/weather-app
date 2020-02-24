import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../models/city';




@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  model: City;

  constructor(
    private weatherService: WeatherService,
    public router: Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var city: City = {
      cityName: form.value.cityName,
      country: form.value.country,
      imageurl: form.value.imageurl
    };
    console.log(form.value.cityName);
    console.log(city);
    // this.model.cityName = form.value.cityName;
    // this.model.country = form.value.country;
    // this.model.imageurl = form.value.imageurl;

    this.weatherService.addCity(city);
    this.router.navigate(['/weather-details/'+ form.value.cityName]);
  }

}
