import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WeatherComponentsUiService } from './weather-components-ui.service';
import { Weather } from './interfaces/types';
import { FormsModule } from '@angular/forms';
import { DegreePipe } from './pipes/degree.pipe';
import { SpeedPipe } from './pipes/speed.pipe';
import { PercentilePipe } from './pipes/percentile.pipe';

@Component({
  selector: 'nw-weather-components-ui',
  standalone: true,
  imports: [FormsModule, DegreePipe, SpeedPipe, PercentilePipe],
  templateUrl: './weather-components-ui.component.html',
  styleUrls: ['./weather-components-ui.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class WeatherComponentsUiComponent {
  weather?: Weather;
  searchCity: string = '';

  constructor(private dataService: WeatherComponentsUiService) {}
  ngOnInit() {
    this.checkWeather();
  }

  checkWeather(city?: string) {
    this.dataService.get(city).subscribe(
      (data) => {
        this.weather = data as Weather;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSearch() {
    this.checkWeather(this.searchCity);
  }
}
