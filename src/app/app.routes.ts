import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'weather/:id', loadComponent: () => WeatherComponent },
];
