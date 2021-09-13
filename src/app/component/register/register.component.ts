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
  email:string=''
  username: string=''
  password:string=''
  passwordConf: string=''

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
        this.email=value.email
        this.username=value.username
        this.password=value.password
        this.passwordConf=value.passwordConf
        console.log(value)
    })
  }
  registerUser(){
    this.user.registerUser(this.email,this.username,this.password,this.passwordConf);
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
