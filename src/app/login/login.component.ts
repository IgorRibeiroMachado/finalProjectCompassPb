import { FormControl, RangeValueAccessor } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new FormControl();
  password = new FormControl();

  userValid = true;
  passwordValid = true;

  valida(type: string, event: any) {
    const value = event.target.value;
    if (type == 'user') {
      if (value.length < 3)
        this.userValid = false;
      else
        this.userValid = true;
    } else if (type == 'password'){
      if (value.length < 3)
        this.passwordValid = false;
      else
        this.passwordValid = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
