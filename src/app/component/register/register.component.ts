import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.registerForm = this.formBuilder.group({
      email: '',
      username: '',
      password:'',
      passwordConf:''
  })
  this.listenToValueChanges()
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
    this.user.registerUser(this.email,this.username,this.password,this.passwordConf)
  }

}
