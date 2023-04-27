import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  BtnTypeClasses: any = {
    'primaryBtn': "btn-primary",
    'google': "btn-google",
    'addToCart': "btn-add-to-cart",
  };

  @Input()
  btnType!: string;
}
