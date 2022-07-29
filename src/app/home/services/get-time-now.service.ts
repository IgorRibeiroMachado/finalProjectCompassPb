import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getTime {

  private now = new Date();

  getTimeNow() {
    let hora = `${this.now.getHours()}`;
    let min = `${this.now.getMinutes()}`;

    if (hora.length == 1) {
      hora = `0${hora}`;
    }
    if (min.length == 1) {
      min = `0${min}`;
    }

    const dateTimeNow = {
      diaNumber: this.now.getDate(),
      ano: this.now.getFullYear(),
      mes: Month[this.now.getMonth()],
      diaWord: Day[this.now.getDay()],
      hora,
      min,
    }

    return dateTimeNow;
  }

  constructor() { }
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
