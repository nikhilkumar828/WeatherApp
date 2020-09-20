import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private weather: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private router: Router) {}

  searchByCountry(countryQuery: string) {
    let params = new HttpParams();
    params = params.append("country", countryQuery);
    return this.http.get("http://localhost:5000/api/search", { params }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getWeather(cities) {
    const mockRes = [
      {
        coord: {
          lon: -77.93,
          lat: 42.09,
        },
        sys: {
          country: "US",
          timezone: -14400,
          sunrise: 1600599451,
          sunset: 1600643550,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        main: {
          temp: 0,
          feels_like: -3,
          temp_min: 0,
          temp_max: 0,
          pressure: 1031,
          humidity: 88,
        },
        visibility: 10000,
        wind: {
          speed: 1.1,
          deg: 67,
        },
        clouds: {
          all: 1,
        },
        dt: 1600593297,
        id: 8085328,
        name: "Level Acres Mobile Home Park",
      },
    ];
    let params = new HttpParams();
    params = params.append("cities", cities);
    return this.http.get("http://localhost:5000/api/weather", { params }).pipe(
      map((res: any) => {
        if(!res.success) {
          alert("Run into some error, Please try again after some time......");
          return [];
        }
        return res.report.list;
      })
    ).subscribe((citiesWeather) => {
      this.weather.next(citiesWeather);
      this.router.navigate(['show-weather']);
    });
      // this.weather.next(mockRes);
      // this.router.navigate(['show-weather']);
  }

  citiesWeather() {
    return this.weather.asObservable();
  }
}
