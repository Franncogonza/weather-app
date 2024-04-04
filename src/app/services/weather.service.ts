import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);

  getForecast(identifier: string): any {
    const url = `https://api.weather.gov/gridpoints/${identifier}/31,80/forecast`;
    return this.http.get(url);
  }
}
