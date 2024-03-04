import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherComponentsUiService } from './weather-components-ui.service';

describe('WeatherComponentsUiService', () => {
  let service: WeatherComponentsUiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherComponentsUiService],
    });
    service = TestBed.inject(WeatherComponentsUiService);
    httpTestingController = TestBed.inject(HttpTestingController);

    // Set a valid API key for testing
    service.setAPIKey('test_api_key');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data and return expected result', (done) => {
    const mockWeatherData = {
      weather: [{ main: 'Clear' }],
      main: { temp: 25, humidity: 30 },
      wind: { speed: 5 },
      name: 'Hyderabad',
    };
    const expectedUrl = `${service.apiUrl}Hyderabad&appid=test_api_key`;

    service.get('Hyderabad').subscribe((weather) => {
      expect(weather.city).toBe('Hyderabad');
      expect(weather.temperature).toBe(25);
      expect(weather.humidity).toBe(30);
      expect(weather.windSpeed).toBe(5);
      expect(weather.wIcon?.type).toBe('clear');
      done();
    });

    const req = httpTestingController.expectOne(expectedUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(mockWeatherData);
  });

  it('should assert an error when the API key is not provided', () => {
    service.setAPIKey(''); // Reset API key

    expect(() => service.get('Hyderabad')).toThrowError(
      'Please provide APIKEY property'
    );
  });
});
