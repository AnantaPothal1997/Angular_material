import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    user : new FormControl(''),
    password : new FormControl()
  });

  ngOnInit(): void {
  }

  getFormValues() { 
    console.log(this.loginForm.value);
  }

}
