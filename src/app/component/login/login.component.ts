import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// const axios = require('axios').default;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:[
        "",[
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ]
      ],
    });

  
  }

  onSubmit=()=>{
    console.log(this.loginForm.value)
  }
  get getEmail() {
    return this.loginForm.get('email') as FormArray;
  }
  get getPssword() {
    return this.loginForm.get('password') as FormArray;
  }


}
