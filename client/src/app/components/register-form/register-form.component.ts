import { Component, OnInit } from '@angular/core';
import { RegisterFormInputData } from 'src/app/database/register-form-input-data';
import { defaultRegisterFormFields } from 'src/app/database/register-form-input-data';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerFormInputData: any = RegisterFormInputData;

  defaultRegisterFormFields: any = defaultRegisterFormFields;

  email = this.defaultRegisterFormFields.email;
  password = this.defaultRegisterFormFields.password;

  handleRegisterSubmit(event: any) {
    event.preventDefault();

    // this.email = event.target.email.value;
    // this.password = event.target.password.value;

    console.log(event);

    // this.authService.register(this.email, this.password);
  }

}
