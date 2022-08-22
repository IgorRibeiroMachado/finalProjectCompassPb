import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAccess {

  constructor(private router: Router, public fireAuth: AngularFireAuth) { }

  public createNewUser(email: any, password: any) {
    this.fireAuth['createUserWithEmailAndPassword'](email, password)
      .then((success: any) => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        console.log(`Codígo de erro: ${error.code}! Mensagem: ${error.message}`);
      })
  }

  public signInUser(email: any, password: any): any {
    this.fireAuth['signInWithEmailAndPassword'](email, password)
      .then((success: any) => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        console.log(error);
      })
  }

  public signOutUser() {
    this.fireAuth['signOut']().then((success: any) => {
      console.log('Deslogado com sucesso!');
    })
    .catch((error: any) => {
      console.log('Não deu pra deslogar :(');
    })
  }
}

