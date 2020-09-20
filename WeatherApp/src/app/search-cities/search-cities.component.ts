import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from "rxjs/operators";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-search-cities",
  templateUrl: "./search-cities.component.html",
  styleUrls: ["./search-cities.component.less"],
})
export class SearchCitiesComponent implements OnInit {

  cityQuery: FormControl = new FormControl();
  countryQuery: FormControl = new FormControl();
  cityResult: any = [];
  citiesBySelectedCountry: any = [];
  countryResult: any = [];
  map = new Map();
  selectedCities: any = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.countryQuery.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((query) => this.weatherService.searchByCountry(query))
      )
      .subscribe((results: any) => {
        this.map.clear();
        this.cityResult = [];
        this.countryResult = [];
        for (const item of results.countries) {
          if (!this.map.has(item.country)) {
            const record = {
              id: item.id,
              country: item.country,
              cities: [{ name: item.name, id: item.id }],
            };
            this.map.set(item.country, record);
            this.countryResult.push({
              id: item.id,
              country: item.country,
            });
          } else {
            const existingCountry = this.map.get(item.country);
            existingCountry.cities.push({ name: item.name, id: item.id });
          }
        }
      });

    this.cityQuery.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((query: any) => {
        this.cityResult = this.citiesBySelectedCountry.filter((item) =>
          item.name.toLowerCase().startsWith(query.toLowerCase())
        );
      });
  }

  countrySelected(country: string) {
    this.countryResult = [];
    this.citiesBySelectedCountry = this.map.get(country).cities;
  }

  citySelected(city) {
    if (this.selectedCities.length > 9) {
      this.cityResult = [];
      this.countryResult = [];
      alert("Maximum cities selected");
    } else {
      this.cityResult = this.cityResult.filter((item) => item.id !== city.id);
      const selectedCityPresent = this.selectedCities.find(
        (item) => item.id === city.id
      );
      if (!selectedCityPresent) {
        this.selectedCities.push(city);
      }
    }
  }

  getWeather() {
    const selectedCitiesIds = this.selectedCities.map((item) => item.id);
    this.weatherService
      .getWeather(selectedCitiesIds);
  }
}
