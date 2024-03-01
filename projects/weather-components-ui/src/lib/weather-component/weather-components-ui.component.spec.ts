import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponentsUiComponent } from './weather-components-ui.component';

describe('WeatherComponentsUiComponent', () => {
  let component: WeatherComponentsUiComponent;
  let fixture: ComponentFixture<WeatherComponentsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponentsUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherComponentsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
