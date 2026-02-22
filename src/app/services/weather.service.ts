import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = '/WeatherForecast';

  constructor(private http: HttpClient) {}

  getForecasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.apiUrl)
      .pipe(
        catchError(err => {
          console.error('Error fetching forecasts', err);
          return of([]);
        })
      );
  }
}