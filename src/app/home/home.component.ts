import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {

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
