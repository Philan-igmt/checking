import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// const axios = require('axios').default;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit=()=>{
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT',
      },
      body: JSON.stringify({
        // your expected POST request payload goes here
        
          email: "philanis@foodssss.com",
          username: "Sithembiso",
          password: "Sithembiso024!",
          passwordConf: "Sithembiso024!"
          })
    })
      .then(res => res.json())
      .then(data => {
      // enter you logic when the fetch is successful
        console.log("this is the data",data)
      })
      .catch(error => {
      // enter your logic for when there is an error (ex. error toast)
      console.log("this is are the errors",error)
      })  

  }

}
