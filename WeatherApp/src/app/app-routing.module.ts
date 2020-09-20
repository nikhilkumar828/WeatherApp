import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { SearchCitiesComponent } from './search-cities/search-cities.component';


const routes: Routes = [
  {
    path: 'show-weather',
    component: DisplayWeatherComponent
  },
  {
    path: '',
    component: SearchCitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
