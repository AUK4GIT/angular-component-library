import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WIcon, Weather } from './interfaces/types';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherComponentsUiService {
  apiKey = '97ed86b99fdcf738c7a080e0fa9fde20';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

  wIcons: WIcon[] = [
    {
      type: 'clouds',
      src: 'https://cdn-icons-png.flaticon.com/512/7774/7774417.png',
    },
    {
      type: 'clear',
      src: 'https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png',
    },
    {
      type: 'mist',
      src: 'https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png',
    },
    {
      type: 'snow',
      src: 'https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png',
    },
    {
      type: 'smoke',
      src: 'https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png',
    },
    {
      type: 'rain',
      src: 'https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png',
    },
    {
      type: 'drizzle',
      src: 'https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  get(city = 'Hyderabad') {
    return this.httpClient
      .get<Weather>(this.apiUrl + city + `&appid=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          console.log('data-> ', response);
          const wIconType = response.weather[0].main.toLowerCase();
          const wIcon = this.wIcons.find(
            (icon: WIcon) => icon.type === wIconType
          );
          const weather: Weather = {
            temperature: response.main.temp,
            city: response.name,
            humidity: response.main.humidity,
            windSpeed: response.wind.speed,
            wIcon: wIcon,
          };
          return weather;
        }),
        catchError((err) => {
          alert(err);
          return err;
        })
      );
  }
}
