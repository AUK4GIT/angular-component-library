import { TestBed } from '@angular/core/testing';

import { WeatherComponentsUiService } from './weather-components-ui.service';

describe('WeatherComponentsUiService', () => {
  let service: WeatherComponentsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherComponentsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
