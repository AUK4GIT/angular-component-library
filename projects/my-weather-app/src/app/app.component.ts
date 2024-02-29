import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponentsUiComponent } from '../../../weather-components-ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponentsUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-weather-app';
}
