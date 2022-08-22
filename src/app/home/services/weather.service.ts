import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  takeTemperature(lat: number, lon: number): Observable<any> {
    const apiKey = 'cad6085cce14e33a2bbf4128b5268373';
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  }

  takeLocation(lat: number, lon: number): Observable<any> {
    const apiKey = 'ac12d8103b6346bf57264097f5692010';
    return this.http.get<any>(`http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${lat},${lon}`);
  }
  
  constructor(private http: HttpClient) { }
}

