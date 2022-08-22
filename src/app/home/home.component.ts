import { FirebaseAccess } from '../services/firebaseAccess.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getTimeService } from './services/get-time-now.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dateTimeNow = this.getTime.getTimeNow(new Date);

  public city = 'Loading';
  public state: any;
  public temp: any;

  public timer = 600;

  // COLOCAR DENTRO DE SERVICE ALGUMAS FUNÇÕES, TIPO REFRESHPAGE

  takeLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.weatherService.takeLocation(latitude, longitude).subscribe((valor: any) => {
        this.city = valor.data['0'].county;
        this.state = valor.data['0'].region_code;
      });
      this.takeWeather();
    });
  }

  takeWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.weatherService.takeTemperature(latitude, longitude).subscribe((valor: any) => {
        this.temp = Math.trunc(valor.current.temp);
      });
    }); 
  }

  logout() {
    this.router.navigate(['/login']);
    this.firebaseAccess.signOutUser();
  }

  refreshPage() {
    setInterval(() => {
      this.timer--;
      if (this.timer == 0) {
        this.router.navigate(['/login']);
        this.firebaseAccess.signOutUser();
      }
    }, 1000)
  }

  constructor(
    private router: Router,
    private getTime: getTimeService,
    private firebaseAccess: FirebaseAccess,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.takeLocation();
    this.refreshPage();
  }

}


