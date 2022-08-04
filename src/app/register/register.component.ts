import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseAccess } from '../home/services/firebaseAccess.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('moveIcon', [
      state('moveIn', style({
        right: 140,
      })),
      state('moveOut', style({
        right: 85
      })),
      transition('moveOut <=> moveIn', [
        animate('0.5s')
      ])
    ]),
    trigger('warning', [
      state('normal', style({
        borderColor: '#FFF'
      })),
      state('yellow', style({
        borderColor: '#E9B425'
      })),
      transition('normal <=> yellow', [
        animate('0.5s')
      ])
    ]),
    trigger('passwordConfirmationColor', [
      state('enter', style({color: 'green'})),
      state('leave', style({color: '#e9b425'})),

      transition('leave <=> enter', [
        animate('0.2s')
      ])
    ])
  ]
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('')
  })

  passwordValidator = {
    lowerCase: false,
    upperCase: false,
    number: false,
    specialCharacter: false
  }

  isMove = false;
  userValid = true;
  passwordValid = true;
  passwordConfirmValid = true;

  moveIcons() {
    if (
      this.registerForm.controls['user'].value ||
      this.registerForm.controls['password'].value ||
      this.registerForm.controls['passwordConfirm'].value
    ) {
      this.isMove = true;
    } else {
      this.isMove = false;
    }
  }

  validateUser() {
    if (this.registerForm.controls['user'].errors) {
      this.userValid = false;
    } else {
      this.userValid = true;
    }
  }

  validatePasswordConfirm() {
    if (this.registerForm.controls['password'].value != this.registerForm.controls['passwordConfirm'].value
      || this.registerForm.controls['passwordConfirm'].value == '') {
      this.passwordConfirmValid = false;
    } else {
      this.passwordConfirmValid = true;
    }
  }

  validatePassword() {
    const password = this.registerForm.controls['password'].value;
    let checkFlag = 0;
    if (password) {
      // Minúscula
      if (/[a-z]/.test(password)) {
        this.passwordValidator.lowerCase = true;
        checkFlag++;
      } else {
        this.passwordValidator.lowerCase = false;
        checkFlag--;
      }
      // Maiuscula
      if (/[A-Z]/.test(password)) {
        this.passwordValidator.upperCase = true;
        checkFlag++;
      } else {
        this.passwordValidator.upperCase = false;
        checkFlag--;
      }
      // Number
      if (/[0-9]/.test(password)) {
        this.passwordValidator.number = true;
        checkFlag++;
      } else {
        this.passwordValidator.number = false;
        checkFlag--;
      }
      // Caracter Especial
      if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        this.passwordValidator.specialCharacter = true;
        checkFlag++;
      } else {
        this.passwordValidator.specialCharacter = false;
        checkFlag--;
      }
    }
    if (checkFlag == 4) {
      if (!this.registerForm.controls['password'].errors) {
        this.passwordValid = true;
        return;
      }
    }
    this.passwordValid = false;
  }

  register() {
    if (this.passwordValid == true && this.userValid == true && this.passwordConfirmValid == true) {
      this.firebaseAccess.createNewUser(
        this.registerForm.controls['user'].value, this.registerForm.controls['password'].value
      )
    }
    console.log(this.firebaseAccess.auth);
  }

  constructor(private firebaseAccess: FirebaseAccess) { }

  ngOnInit(): void {
  }

}
