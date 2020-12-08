import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  open()
  {
    this.dialog.open(Dialog);
  }

  ngOnInit(): void {
  }
  doctors=[
    {name:"Dr.Ravi", sp:"General Surgeon", qua:"MBBS,MD", hosp:"Sunshine Hospital, Vijayawada ", exp:"15years"},
    {name:"Dr. Madhu ", sp:"Gynacologist", qua:"MBBS, DGO",hosp:"Rainbow Hospital, Visakapatanam", exp:"23years"},
    {name:"Dr.M.Latha", sp:"Dentist", qua:"BDS, MDS",hosp:"Clove Hospital, Bangalore", exp:"12years"},
    {name:"Dr.S.Laya", sp:"Opthomologist", qua:"MBBS,MS Opthal",hosp:"Sono Vision Hospital, Chennai", exp:"17years"},
    {name:"Dr.V Srinivas", sp:"Neurologist", qua:"MBBS,MD, DM Neuro",hosp:"NIMS Hospital, Hyderabad", exp:"22years"},
    {name:"Dr. Saraswathi", sp:"ENT", qua:"MBBS, MS ENT",hosp:"Care Hospital, Bhubaneswar", exp:"13years"},
    {name:"Dr. Suresh", sp:"Veternary", qua:"MBBS,DVM",hosp:"Samaritam Veternary Care, Delhi", exp:"21years"},
    {name:"Dr.Maya", sp:"Dermatologist", qua:"MBBS,MD Derma",hosp:"Yashoda Hospital, Delhi", exp:"18years"},
    {name:"Dr.Kushi", sp:"Physchiaiatrist", qua:"MS Psychology",hosp:"Appollo Hospitals, Kolkata", exp:"10years"},
    {name:"Dr.Arya ", sp:"Gynacologist", qua:"MBBS, DGO",hosp:"Rainbow Hospital, Visakapatanam", exp:"23years"},
    {name:"Dr.Hari", sp:"Dentist", qua:"BDS, MDS",hosp:"Clove Hospital, Bangalore", exp:"12years"},
    ]


  

}

@Component({
  selector:'app-dialog',
  templateUrl:'./dialog.html',
})
export class Dialog{}