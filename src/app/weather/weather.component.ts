import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [WeatherService],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  lineChartData: ChartData<'line'> = {
    datasets: [],
  };
  lineChartLabels: string[] = [];

  private route = inject(ActivatedRoute);
  private weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.setView();
  }

  setView(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.weatherService.getForecast(id).subscribe((data: any) => {
        // Asumiendo que data es la respuesta directa como en tu ejemplo
        const periods = data.properties.periods;
        this.lineChartLabels = periods.map((period: any) => period.name);
        this.lineChartData = {
          datasets: [
            {
              data: periods.map((period: any) => period.temperature),
              label: 'Temperature',
            },
          ],
          // Si estás usando etiquetas, asegúrate de que también estén correctamente definidas.
          labels: periods.map((period: any) => period.name),
        };
      });
    });
  }
}
