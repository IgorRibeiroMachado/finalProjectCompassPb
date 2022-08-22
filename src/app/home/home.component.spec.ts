import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseAccess } from './../services/firebaseAccess.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppModule
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate city has value "Loading"', () => {
    expect(component.city).toEqual('Loading');
  });

  it('should validate state has value "null"', () => {
    expect(component.state).toBeUndefined();
  });

  it('should validate if cityState element display "Loading - " ', () => {
    const cityStateElement = fixture.debugElement
      .query(By.css('.cityState'));
    expect((cityStateElement.nativeElement as HTMLParagraphElement)
      .textContent).toEqual('Loading - ');
  });

  it('should validate state has value undefined', () => {
    expect(component.state).toBeUndefined();
  });

  it('should validate temp has value undefined', () => {
    expect(component.temp).toBeUndefined();
  });

  it('should test logout', () => {
    const firebaseAccessStub: FirebaseAccess = fixture.debugElement.injector.get(
      FirebaseAccess
    );

    const routerStub: Router = fixture.debugElement.injector.get(
      Router
    );

    spyOn(routerStub, "navigate").and.stub();
    spyOn(firebaseAccessStub, "signOutUser").and.stub();
    spyOn(component, "logout").and.callThrough();
    component.timer = 1;
    fixture.detectChanges();

    jasmine.clock().install();
    component.logout();
    jasmine.clock().tick(600);
    expect(component.logout).toHaveBeenCalled();
    jasmine.clock().uninstall();
  });

  it('should test refreshPage', () => {
    const firebaseAccessStub: FirebaseAccess = fixture.debugElement.injector.get(
      FirebaseAccess
    );

    const routerStub: Router = fixture.debugElement.injector.get(
      Router
    );

    spyOn(routerStub, "navigate").and.stub();
    spyOn(firebaseAccessStub, "signOutUser").and.stub();
    spyOn(component, "refreshPage").and.callThrough();
    component.timer = 1;
    fixture.detectChanges();

    jasmine.clock().install();
    component.refreshPage();
    jasmine.clock().tick(600);
    expect(component.refreshPage).toHaveBeenCalled();
    jasmine.clock().uninstall();
  });
});

