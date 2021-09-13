import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {GetPlattersService } from "../../services/get-platters.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup = new FormGroup({
  email: new FormControl(),
  username: new FormControl(),
  password: new FormControl(),
  passwordConf: new FormControl(),
  
});

  hide = true;
  constructor(private user: GetPlattersService,private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
  this.listenToValueChanges()

  this.registerForm = this.formBuilder.group({
    email:['',[
      Validators.required,
      Validators.email,
    ]],
    username:["",[
      Validators.required,
      Validators.minLength(5), 
    ]],
    password:[
      "",[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
      ]
    ],
    passwordConf:[
      "",[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
      ]
    ],
  })
  }
  listenToValueChanges(){
    this.registerForm.valueChanges.subscribe(value=>{
        console.log(value)
    })
  }

  onSubmit=()=>{
    this.registerUser()
   this. clearInputsAfterSubmit()

  }
  registerUser(){
    this.user.registerUser(this.registerForm.value.email,this.registerForm.value.username,this.registerForm.value.password,this.registerForm.value.passwordConf);
    // this.clearInputsAfterSubmit();
  }

  clearInputsAfterSubmit=()=>{
    this.registerForm.reset()
  }


  get user_email(){
    return this.registerForm.get('email');
  }
  get user_username(){
    return this.registerForm.get('username');
  }
  get user_password(){
    return this.registerForm.get('password');
  }
  get user_passwordConf(){
    return this.registerForm.get('email');
  }

}
