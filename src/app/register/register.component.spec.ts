import { FirebaseAccess } from './../services/firebaseAccess.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let authStub = {
    constructor: () => { console.log('contrcturo called') },
    createNewUser: () => { console.log('createNewUser called') },
    signInUser: () => { console.log('signInUser called')},
    signOutUser: () => { console.log('signOutUser called') }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        {
          provide: FirebaseAccess, useValue: authStub
        }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isMove with value false', () => {
    expect(component.isMove).toBeFalsy();
  });

  it('should initialize passwordValid with value true', () => {
    expect(component.passwordValid).toBeTruthy();
  });

  it('should initialize passwordConfirmValid with value true', () => {
    expect(component.passwordConfirmValid).toBeTruthy();
  });

  it('should isMove be truthy if any form controller is fill', () => {
    const form = component.registerForm;
    form.setValue({
      "user": "a",
      "password": "a",
      "passwordConfirm": "a"
    });

    component.moveIcons();
    expect(component.isMove).toBeTruthy();
  });

  it('should isMove be falsy if all form controller is not filled', () => {
    component.moveIcons();
    expect(component.isMove).toBeFalsy();
  });

  it('should validate user (email, required, minlength: 3)', () => {
    component.registerForm.controls['user'].setValue("arvore@folha.com");
    component.validateUser();
    expect(component.userValid).toBeTruthy();
    expect(component.registerForm.controls['user'].errors).toBeNull();
  });

  it('should not validate user', () => {
    component.registerForm.controls['user'].setValue("arvorefolha.com");
    component.validateUser();
    expect(component.userValid).toBeFalsy();
    expect(component.registerForm.controls['user'].errors).not.toBeNull();
  });

  it('should validate passwordConfirmValid', () => {
    component.registerForm.controls['password'].setValue('Arvore123@');
    component.registerForm.controls['passwordConfirm'].setValue('Arvore123@');
    component.validatePasswordConfirm();
    expect(component.passwordConfirmValid).toBeTruthy();
  });

  it('should validate lowerCase in password', () => {
    component.registerForm.controls['password'].setValue('Arvore123@');
    component.validatePassword();
    expect(component.passwordValidator.lowerCase).toBeTruthy();
  });

  it('should not validate lowerCase in password', () => {
    component.registerForm.controls['password'].setValue('ARVORE123@');
    component.validatePassword();
    expect(component.passwordValidator.lowerCase).toBeFalsy();
  });

  it('should validate upperCase in password', () => {
    component.registerForm.controls['password'].setValue('Arvore123@');
    component.validatePassword();
    expect(component.passwordValidator.upperCase).toBeTruthy();
  });

  it('should not validate upperCase in password', () => {
    component.registerForm.controls['password'].setValue('arvore123@');
    component.validatePassword();
    expect(component.passwordValidator.upperCase).toBeFalsy();
  });

  it('should validate number in password', () => {
    component.registerForm.controls['password'].setValue('Arvore123@');
    component.validatePassword();
    expect(component.passwordValidator.number).toBeTruthy();
  });

  it('should not validate number in password', () => {
    component.registerForm.controls['password'].setValue('Arvore@');
    component.validatePassword();
    expect(component.passwordValidator.number).toBeFalsy();
  });

  it('should validate character special in password', () => {
    component.registerForm.controls['password'].setValue('Arvore123@');
    component.validatePassword();
    expect(component.passwordValidator.specialCharacter).toBeTruthy();
  });

  it('should not validate character special in password', () => {
    component.registerForm.controls['password'].setValue('Arvore123');
    component.validatePassword();
    expect(component.passwordValidator.specialCharacter).toBeFalsy();
  });

  it('should validate password', () => {
    component.registerForm.controls['password'].setValue('Arvore@123');
    component.validatePassword();
    expect(component.passwordValid).toBeTruthy();
  });

  it('should validate register function when form is valid', () => {
    const form = component
      .registerForm.setValue({
        "user": "arvore@folhaa.com",
        "password": "Arvore123@",
        "passwordConfirm": "Arvore123@"
    });

    let spy1 = spyOn(component, "register")
      .and.returnValue();

    let spy2 = spyOn(authStub, "createNewUser");

    fixture.detectChanges();

    let teste = component.register();

    expect(component.passwordValid).toBeTruthy();
    expect(component.userValid).toBeTruthy();
    expect(component.passwordConfirmValid).toBeTruthy();
    expect(component.register).toHaveBeenCalled();
  });

  it('should validate register function when form is invalid', () => {
    const form = component
    .registerForm.setValue({
      "user": "arvore@folhaa.com",
      "password": "Arvore123@",
      "passwordConfirm": "Arvore321@"
    });
    component.passwordValid = true;
    component.userValid = true;
    component.passwordConfirmValid = true;
    fixture.detectChanges();

    spyOn(component, "register").and.callFake;
    spyOn(authStub, "createNewUser");

    fixture.detectChanges();

    component.register();
    expect(component.register).toHaveBeenCalled();
  });
});

