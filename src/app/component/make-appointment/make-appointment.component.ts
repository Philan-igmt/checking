import { Component, OnInit } from '@angular/core';
import {GetPlattersService } from "../../services/get-platters.service"
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss']
})
export class MakeAppointmentComponent implements OnInit {

    name:string=''
    surname: string=''
    email:string=''
    cellphoneNumber: string=''
    option: string=''
    reason: string=''
    slot:string=''

  appointmentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    cellphoneNumber: new FormControl(),
    option: new FormControl(),
    reason: new FormControl(),
    slot: new FormControl(),
  });
  constructor(private platters: GetPlattersService,private formBuilder: FormBuilder) { }

  seasons:any=["Google Meet", "Zoom", "Microsoft Teams", "Skype","Phone Call"]
  ngOnInit(): void {

    this.appointmentForm = this.formBuilder.group({
      name: '',
      surname: '',
      email:'',
      cellphoneNumber: '',
      option:'',
      reason: '',
      slot: '',
  })
    this.listenToValueChanges()
  }

  listenToValueChanges(){
    this.appointmentForm.valueChanges.subscribe(value=>{
        this.name=value.name
        this.surname=value.surname
        this.email = value.email
        this.cellphoneNumber= value.cellphoneNumber
        this.option= value.option
        this.reason= value.reason
        this.slot=value.slot
    })
  }

  bookAppointment(){
    this.platters.sendAppointment(this.name,this.surname,this.email,this.cellphoneNumber,this.option,this.reason,this.slot)
  }

}
