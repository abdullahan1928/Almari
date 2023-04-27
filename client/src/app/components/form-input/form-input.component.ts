import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  label!: string;

  @Input()
  type!: string;

  @Input()
  required!: boolean;

  @Input()
  name!: string;

  @Input()
  value!: any;
}
