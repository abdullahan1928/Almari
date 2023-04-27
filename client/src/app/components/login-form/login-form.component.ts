import { Component, OnInit } from '@angular/core';
import { LoginFormInputData } from 'src/app/database/login-form-input-data';
import { defaultLoginFormFields } from 'src/app/database/login-form-input-data';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  loginFormInputData: any = LoginFormInputData;

  defaultLoginFormFields: any = defaultLoginFormFields;

  formFields: any = this.defaultLoginFormFields;

  email: string = this.formFields.email;

  password: string = this.formFields.password;

  error!: string;

  resetFormFields = () => {
    this.formFields = this.defaultLoginFormFields;
  };

  handleSubmit = async () => {

    try {
      // await this.authService.SignIn(this.email, this.password);
      console.log('User logged in successfully');
      console.log(this.email, this.password);
      this.resetFormFields();
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        this.error = "User not found";
      } else if (err.code === "auth/wrong-password") {
        this.error = "Wrong password";
      } else {
        this.error = err.message;
      }
    }
  };
}
