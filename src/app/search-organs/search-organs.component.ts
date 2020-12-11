import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-organs',
  templateUrl: './search-organs.component.html',
  styleUrls: ['./search-organs.component.css']
})
export class SearchOrgansComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  open()
  {
    this.dialog.open(Dialog);
  }

  ngOnInit(): void {
  }
  doctors=[
    {name:"Complete Blood Count", sp:"pediatrician", qua:"MBBS,MD", hosp:"Vijaya Labs,Ralph Diagnostics & Clinics", exp:"Rs.199"},
    {name:"The Prothrombin time (PT) Test ", sp:"psychiatrist", qua:"MBBS,DGO,MD,MCh",hosp:"Health Care Diagnostics", exp:"Rs.300"},
    {name:"Basic Metabolic Panel Test", sp:"cardialogist", qua:"MBBS,MD",hosp:"Harsha Labs,Health Care Diagnostics, Alpha labs", exp:"Rs.2000"},
    {name:"Comprehensive Metabolic Pane Test", sp:"pediatrician", qua:"MBBS,MD",hosp:"Appollo Diagnostics", exp:"Rs.1515"},
    {name:"Lipid profile test", sp:"psychiatrist", qua:"MBBS,MD",hosp:"Lasya Diagnostics, Health Care Diagnostics, Alpha labs", exp:"Rs.299"},
    {name:"Cholesterol Test Price", sp:"cardialogist", qua:"MBBS,MD",hosp:"Sree Labs,Vijaya Labs", exp:"Rs.299"},
    {name:"DNA test", sp:"pediatrician", qua:"MBBS,MD",hosp:"Health Care Diagnostics", exp:"Rs.4000"},
    
  ]
  doctors1=[
    {name:"Liver Panel test", sp:"psychiatrist", qua:"MBBS,MD",hosp:"Alpha labs", exp:"Rs.450"},
    {name:"Urinalysis test", sp:"cardialogist", qua:"MBBS,MD",hosp:"Sneha Labs", exp:"Rs. 1200"},
    {name:"X-Ray Test", sp:"pediatrician", qua:"MBBS,MD",hosp:"Vijaya Labs", exp:"Rs.1300"},
    {name:"CT Scan", sp:"psychiatrist", qua:"MBBS,MD",hosp:"Ralph Diagnostics & Clinics", exp:"Rs.1500"},
    {name:"MRI Test", sp:"cardialogist", qua:"MBBS,MD",hosp:"Appollo Diagnostics", exp:"2600"},
    {name:"Pregnancy Test", sp:"pediatrician", qua:"MBBS,MD",hosp:"Vijaya Labs", exp:"Rs.550"},

  ]

}
@Component({
  selector:'app-dialog',
  templateUrl:'./dialog.html',
})
export class Dialog{}