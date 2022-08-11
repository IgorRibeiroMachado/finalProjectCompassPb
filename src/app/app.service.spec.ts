import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppService', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(AppComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
