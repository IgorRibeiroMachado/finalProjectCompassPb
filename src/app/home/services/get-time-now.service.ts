import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class getTimeService {

  public getTimeNow(now: Date) {
    let hora = `${now.getHours()}`;
    let min = `${now.getMinutes()}`;

    if (hora.length == 1) {
      hora = `0${hora}`;
    }
    if (min.length == 1) {
      min = `0${min}`;
    }

    const dateTimeNow = {
      diaNumber: now.getDate(),
      ano: now.getFullYear(),
      mes: Month[now.getMonth()],
      diaWord: Day[now.getDay()],
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
