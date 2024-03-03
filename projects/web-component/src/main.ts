import { createApplication } from '@angular/platform-browser';
import { appConfig } from './main.config';
import { createCustomElement } from '@angular/elements';
import { WeatherComponentsUiComponent } from 'weather-components-ui';
import { ApplicationRef } from '@angular/core';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const webComponent = createCustomElement(WeatherComponentsUiComponent, {
    injector: app.injector,
  });
  customElements.define('nw-weather-components-ui', webComponent);
})();
