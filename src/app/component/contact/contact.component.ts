import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message:["",[Validators.required,]],
    });

  }

}
