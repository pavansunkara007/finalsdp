import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  gender:string;
  qua:string;
  exp:string;
  location: string;
  phno:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'B.Rajesh', gender: 'M', qua:"GNM",exp: '15years',location:'Guntur',phno:7946332149},
  {position: 2, name: 'M.Prakash', gender: 'M', qua:"B.Sc Nursing",exp: '11years',location:'Tirupathi',phno:8555490221},
  {position: 3, name: 'V.Durga', gender: 'F', qua:"B.Sc Nursing",exp: '9years',location:'Visakapatanam',phno:9398827532},
  {position: 4, name: 'S.Karthick', gender: 'M', qua:"GNM",exp: '5years',location:'Chennai',phno:9946334076},
  {position: 5, name: 'Ritu Sharma', gender: 'F', qua:"GNM",exp: '7years',location:'Mumbai',phno:8891450377},
  {position: 6, name: 'A.Pranathi', gender: 'F', qua:"GNM",exp: '10years',location:'Delhi',phno:9888603157},
  {position: 7, name: 'T.Ravi', gender: 'M', qua:"B.Sc Nursing",exp: '17years',location:'Bangalore',phno:8032558905},
  {position: 8, name: 'Pranay', gender: 'M', qua:"GNM",exp: '13years',location:'Kolkata',phno:7869402232},
  {position: 9, name: 'P.Sruthi', gender: 'F', qua:"B.Sc Nursing",exp: '12years',location:'Kakinada',phno:8039958905},
  {position: 10, name: 'K.Siva', gender: 'M', qua:"GNM",exp: '3years',location:'Kochi',phno:7890652232},
  {position: 11, name: 'K.Ramya', gender: 'F', qua:"B.Sc Nursing",exp: '10years',location:'Goa',phno:87653488905},
  {position: 12, name: 'A.Ajay', gender: 'M', qua:"GNM",exp: '7years',location:'Srinagar',phno:7863452232},
];


@Component({
  selector: 'app-asst',
  templateUrl: './asst.component.html',
  styleUrls: ['./asst.component.css']
})
export class AsstComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'gender', 'qua','exp','location','phno'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
