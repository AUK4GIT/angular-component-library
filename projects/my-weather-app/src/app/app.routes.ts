import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '/',
    loadChildren: () =>
      import('weather-components-ui').then((m) => m.WeatherComponentsUiModule),
  },
];
