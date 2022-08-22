import { WeatherService } from './weather.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, of } from 'rxjs';

function createResponse(body: any) {
  return Observable.create((observer: Observer<any>) => {
    observer.next(body);
  });
}

fdescribe('weatherService', () => {
  let service: WeatherService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        WeatherService
      ]
    });
    http = bed.inject(HttpClient);
    service = bed.inject(WeatherService);
  });

  it('should validate takeTemperature function', () => {
    service.takeTemperature(123, 321).subscribe((data: any) => {
      expect(data).toEqual({ weather: 'mock' });
    })
  });

  it('should validate takeLocation function', () => {
    service.takeLocation(123, 321).subscribe((data: any) => {
      expect(data).toEqual({ weather: 'mock' });
    });
  });

  class MockHttp {
    get() {
      return createResponse({ weather: 'mock'});
    }
  }

});
