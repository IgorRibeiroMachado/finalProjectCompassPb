import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
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
        BrowserAnimationsModule
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

  it('should isMove be truthy if any form controller is fill', () => {
    const form = component.loginForm;
    form.setValue({
      "user": "a",
      "password": "a"
    });

    component.moveIcons();
    expect(component.isMove).toBeTruthy();
  });
});
