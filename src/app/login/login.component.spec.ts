import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { FirebaseAccess } from '../services/firebaseAccess.service';
import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        AppModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize loginValid with true', () => {
    expect(component.loginValid).toBeTruthy();
  });

  it('should initialize isMove with false', () => {
    expect(component.isMove).toBeFalsy();
  });

  it('should isMove be truthy when user controller in login form is fill', () => {
    component.loginForm.controls['user'].setValue('a');
    component.moveIcons();
    expect(component.isMove).toBeTruthy();
  });

  it('should isMove be truthy when password controller in login form is fill', () => {
    component.loginForm.controls['password'].setValue('a');
    component.moveIcons();
    expect(component.isMove).toBeTruthy();
  });

  it('should isMove be falsy when any controller in form is not filled', () => {
    component.moveIcons();
    expect(component.isMove).toBeFalsy();
  });


  it('should validate login function when success', () => {
    const firebaseAccess: FirebaseAccess = fixture.debugElement.injector.get(FirebaseAccess);

    spyOn(firebaseAccess, 'signInUser').and.returnValue(Promise.resolve(true));
    spyOn(component, 'login').and.callThrough();

    component.login('arvore@folha.com', 'Arvore123@');

    expect(component.login).toHaveBeenCalled();

  });

  it('should validate login function when failed', () => {
    const firebaseAccess: FirebaseAccess = fixture.debugElement.injector.get(FirebaseAccess);

    spyOn(firebaseAccess, 'signInUser').and.returnValue(Promise.reject(true));
    spyOn(component, 'login').and.callThrough();

    component.login('arvore@folha.com', 'Arvore123@');

    expect(component.login).toHaveBeenCalled();
  });

});
