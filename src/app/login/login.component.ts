import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    ])
  ]
})
  


export class LoginComponent implements OnInit {

  
  isMove = false;
  moveIcons() {
    if (this.loginForm.controls['user'].value || this.loginForm.controls['password'].value) {
      this.isMove = true;
    } else {
      this.isMove = false;
    }
  }

  isYellow = false;
  changeColor() {
    if (this.loginForm.controls['user'].errors || this.loginForm.controls['password'].errors) {
      this.isYellow = true;
    } else {
      this.isYellow = false;
    }
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  notValidUser: any;
  notValidPassword: any;

  validate() { /* Validação simples */
    this.notValidUser = this.loginForm.controls['user'].errors
    this.notValidPassword = this.loginForm.controls['password'].errors;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
