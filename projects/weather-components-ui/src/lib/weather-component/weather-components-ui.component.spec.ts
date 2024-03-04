import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponentsUiComponent } from './weather-components-ui.component';
import { WeatherComponentsUiService } from './weather-components-ui.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DegreePipe } from './pipes/degree.pipe';
import { SpeedPipe } from './pipes/speed.pipe';
import { PercentilePipe } from './pipes/percentile.pipe';
import { of, throwError } from 'rxjs';

describe('WeatherComponentsUiComponent', () => {
  let component: WeatherComponentsUiComponent;
  let fixture: ComponentFixture<WeatherComponentsUiComponent>;
  let mockDataService: jasmine.SpyObj<WeatherComponentsUiService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('WeatherComponentsUiService', [
      'get',
    ]);

    await TestBed.configureTestingModule({
      declarations: [WeatherComponentsUiComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        // Pipes could be included here or mocked if necessary
      ],
      providers: [
        { provide: WeatherComponentsUiService, useValue: mockDataService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponentsUiComponent);
    component = fixture.componentInstance;
    mockDataService.get.and.returnValue(of({} as Weather)); // Mock successful response
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkWeather when initialized', () => {
    expect(mockDataService.get).toHaveBeenCalled();
  });

  it('should update weather data when checkWeather is called', () => {
    const mockWeather: Weather = {
      temperature: 20,
      city: 'Sample City',
      humidity: 50,
      windSpeed: 5,
      wIcon: undefined,
      // ...rest of the properties as needed
    };

    mockDataService.get.and.returnValue(of(mockWeather));

    component.checkWeather('Sample City');
    expect(component.weather).toEqual(mockWeather);
  });

  it('should handle error when checkWeather fails', () => {
    spyOn(console, 'error'); // Spy on console.error to intercept calls

    const errorResponse = new Error('An error occurred');
    mockDataService.get.and.returnValue(throwError(() => errorResponse));

    component.checkWeather('Invalid City');
    expect(console.error).toHaveBeenCalledWith(errorResponse);
  });

  it('should set apiKey correctly if @Input() provided', () => {
    component.apiKey = 'test_key';
    component.ngOnInit(); // This would typically be called automatically by Angular

    expect(mockDataService.setAPIKey).toHaveBeenCalledWith('test_key');
  });
});
