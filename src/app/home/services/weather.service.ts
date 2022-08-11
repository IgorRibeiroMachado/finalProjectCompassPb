import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  takeTemperature() {
    const apiKey = 'cad6085cce14e33a2bbf4128b5268373';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .subscribe((valor) => {
          console.log(valor);
        });
    })
  }

  takeLocation() {
    const apiKey = 'ac12d8103b6346bf57264097f5692010';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`)
        .subscribe((valor) => {
          console.log(valor);
      });
    })
  }

  /* takeLocation() {
    const apiKey = 'ac12d8103b6346bf57264097f5692010';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`)
        .subscribe((valor) => {
          //this.city = valor.data['0'].county;
          //this.state = valor.data['0'].region_code;
          //this.takeWeather();
      });
    })
  } */

  /* takeWeather() {
    const apiKey = 'cad6085cce14e33a2bbf4128b5268373';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .subscribe((valor) => {
          //this.temp = Math.trunc(valor.current.temp);
        })
    })
  } */

  constructor(private http: HttpClient) { }
}

