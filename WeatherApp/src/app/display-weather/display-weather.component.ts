import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.less']
})
export class DisplayWeatherComponent implements OnInit {

  citiesWeather: any = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.citiesWeather().subscribe( cities => {
      this.citiesWeather = cities;
    })
  }

}
