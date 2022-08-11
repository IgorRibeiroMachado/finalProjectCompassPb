import { FirebaseAccess } from './services/firebaseAccess.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { getTimeService } from './services/get-time-now.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dateTimeNow = this.getTime.getTimeNow();

  public city = 'Loading';
  public state: any;
  public temp: any;

  public timer = 60;

  takeLocation() {
    const apiKey = 'ac12d8103b6346bf57264097f5692010';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`).subscribe((valor) => {
        this.city = valor.data['0'].county;
        this.state = valor.data['0'].region_code;
        console.log(valor);
        this.takeWeather();
      });
    })
  }

  takeWeather() {
    const apiKey = 'cad6085cce14e33a2bbf4128b5268373';
    navigator.geolocation.getCurrentPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .subscribe((valor) => {
          this.temp = Math.trunc(valor.current.temp);
          console.log(valor);
        })
    })
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
    private http: HttpClient,
    private router: Router,
    private getTime: getTimeService,
    private firebaseAccess: FirebaseAccess,
  ) {}

  ngOnInit(): void {
    this.takeLocation();
    /* this.takeWeather(); */
    this.refreshPage();
  }

}


