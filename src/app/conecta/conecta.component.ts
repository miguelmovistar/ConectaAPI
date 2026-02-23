import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from '../services/weather.service';

@Component({
  selector: 'conecta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent implements OnInit {
  forecasts: WeatherForecast[] = [];
  loading = false;
  error = '';
  weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.weatherService.getForecasts().subscribe({
      next: data => { this.forecasts = data; this.loading = false; },
      error: err => { this.error = 'No se pudo obtener datos'; this.loading = false; }
    });
  }
}
