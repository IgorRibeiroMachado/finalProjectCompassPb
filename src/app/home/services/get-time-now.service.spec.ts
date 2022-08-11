import { getTimeService } from './get-time-now.service';
import { TestBed } from '@angular/core/testing';

describe('getTimeNowService', () => {
  let service: getTimeService;

  const now = new Date();

  enum Day {
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabádo'
  }

  enum Month {
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getTimeService);
  });

  it('should return formatted current time', () => {

    let hora = `${now.getHours()}`;
    let min = `${now.getMinutes()}`;

    if (hora.length == 1) {
      hora = `0${hora}`;
    }
    if (min.length == 1) {
      min = `0${min}`;
    }

    const currentDateTime = {
      diaNumber: now.getDate(),
      ano: now.getFullYear(),
      mes: Month[now.getMonth()],
      diaWord: Day[now.getDay()],
      hora,
      min,
    };

    expect(service.getTimeNow())
    .toEqual(currentDateTime);
  });
});
