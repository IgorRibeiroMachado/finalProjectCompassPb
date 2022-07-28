import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public now = new Date();

  public dateTimeNow = {
    diaNumber: this.now.getDate(),
    ano: this.now.getFullYear(),
    mes: Month[this.now.getMonth()],
    diaWord: Day[this.now.getDay()],
    hora: this.now.getHours(),
    min: this.now.getMinutes(),
  }

  public city: any;
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
        })
    })
  }

  refreshPage() {
    setInterval(() => {
      this.timer--;
      if (this.timer == 0)
        this.router.navigate(['/login']);
    }, 1000)
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.takeLocation();
    this.takeWeather();
    this.refreshPage();
  }

}

export enum Day {
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabádo'
}

export enum Month {
  Janeiro,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro
}
