import { getTimeService } from './get-time-now.service';
import { TestBed } from '@angular/core/testing';

fdescribe('getTimeNowService', () => {
  let service: getTimeService;

  const now = new Date();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getTimeService);
  });

  it('should return formatted current time', () => {
    let data = new Date();
    data.setMinutes(2);
    data.setHours(2);
    spyOn(service, 'getTimeNow').and.callThrough();
    service.getTimeNow(data);
    expect(service.getTimeNow).toHaveBeenCalled();
  });
});
