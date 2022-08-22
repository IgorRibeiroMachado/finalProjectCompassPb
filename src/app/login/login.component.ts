import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { FirebaseAccess } from '../services/firebaseAccess.service';

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
    ]),
  ]
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  loginValid = true;
  isMove = false;

  moveIcons() {
    if (this.loginForm.controls['user'].value
     || this.loginForm.controls['password'].value) {
      this.isMove = true;
    } else {
      this.isMove = false;
    }
  }

  login(user: any, password: any) {
    this.firebaseAccess.signInUser(user, password)
    .then(() => {
      this.loginValid = true;
    })
    .catch(() => {
      this.loginValid = false;
    });
  }

  constructor(
    private firebaseAccess: FirebaseAccess
  ) {}

  ngOnInit(): void {
  }
}
