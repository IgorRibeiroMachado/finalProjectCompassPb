import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    http = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should city has value "Loading"', () => {
    expect(component.city).toEqual('Loading');
  });

  it('should state has value "null"', () => {
    expect(component.state).toBeUndefined();
  });

  it('should cityState element display "Loading - " ', () => {
    const cityStateElement = fixture.debugElement.query(By.css('.cityState'));
    expect((cityStateElement.nativeElement as HTMLParagraphElement).textContent).toEqual('Loading - ');
  });

  it('should state has value undefined', () => {
    expect(component.state).toBeUndefined();
  });

  it('should temp has value undefined', () => {
    expect(component.temp).toBeUndefined();
  });

  it('should test if takeLocation function is being called', () => {
    const spy = spyOn(component, 'takeLocation').and.callThrough();
    component.takeLocation();
    expect(spy).toHaveBeenCalled();
  });

  /* it('should test if takeWeather function is being called', () => {

    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
      let position: { coords: { latitude: 12.3, longitude: -32.1 } };
    });

    const spy = spyOn(http, 'get').and.callThrough();
    component.takeWeather();
    expect(spy).toHaveBeenCalled();
  }); */

  // takeLocation()
  /*
    {
      'conty': "Curitiba",
      'region_code': "PR"
    }
  */
  // takeWeather() current.temp
  /*
    {
      current: {
        'temp': 13.05;
      }
    }
  */
  // logout()
  // refreshPage()

/*     it('should test refreshPage function', () => {
      jasmine.clock().install();

      component.refreshPage();
      jasmine.clock().tick(600);

      jasmine.clock().uninstall();
    }); */

});
