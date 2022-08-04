import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAccess {

  private firebaseConfig = {
    apiKey: "AIzaSyBKTKHepesotRdaOmKi9cok1XMd9kTl5A8",
    authDomain: "finalprojectangular-bd4f1.firebaseapp.com",
    projectId: "finalprojectangular-bd4f1",
    storageBucket: "finalprojectangular-bd4f1.appspot.com",
    messagingSenderId: "114691533755",
    appId: "1:114691533755:web:9e9f15eefe81ab119e329e",
    measurementId: "G-QFH041HDEW"
  };

  private app = initializeApp(this.firebaseConfig);

  public auth = getAuth();

  public createNewUser(email: any, password: any) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(`Codígo de erro: ${error.code}! Mensagem: ${error.message}`);
      })
  }

  public signInUser(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public signOutUser() {
    signOut(this.auth).then(() => {
      console.log('Deslogado com sucesso!');
    })
    .catch((error) => {
      console.log('Não deu pra deslogar :(');
    })
  }

  public teste() {
    console.log(this.auth);
  }


  constructor(private router: Router) { }
}

