import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { FirebaseAccess } from './firebaseAccess.service';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';

fdescribe('firebaseService', () => {

  let firebaseAccess: FirebaseAccess;
  let angularFireAuthSpy: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(() => {

    /* const angularFireAuthStub = jasmine.createSpyObj('AngularFireAuth',
      ['createUserWithEmailAndPassword', 'signInWithEmailAndPassword', 'signOut']); */

    const angularFireAuthStub = {
      createUserWithEmailAndPassword: (): Promise<any> => Promise.reject(true),
      signInWithEmailAndPassword: (): Promise<any> => Promise.reject(true),
      signOut: (): Promise<any> => Promise.reject(true)
    }

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
      ],
      providers: [
        FirebaseAccess,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
      ]
    });

    angularFireAuthSpy = TestBed.inject(AngularFireAuth) as jasmine.SpyObj<AngularFireAuth>;
    firebaseAccess = TestBed.inject(FirebaseAccess);
  });

  /* it('should validate createNewUser function', () => {

    spyOn(firebaseAccess, 'createNewUser').and.callThrough();
    firebaseAccess.createNewUser("email@email.com", "Password123@");
    expect(firebaseAccess).toHaveBeenCalled();
  }); */


  /* it('should validate signOutUser', (done) => {
    angularFireAuthSpy['signOut']();

    spyOn(firebaseAccess, 'signOutUser').and.callThrough();
    firebaseAccess.signOutUser();

    expect(firebaseAccess.signOutUser).toHaveBeenCalled();
    expect(angularFireAuthSpy['signOut']).toHaveBeenCalled();
  }); */
});
