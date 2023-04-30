import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/model/user-model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    address: '',
    card: '',
    cvc: '',
  };

  userId: any = null;
  constructor(    public authService: AuthService) { }



  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);  

  }





  onSubmit() {
    console.log('Form submitted:', this.formData);
    // You can send the formData to a backend service for further processing.
  }

}
