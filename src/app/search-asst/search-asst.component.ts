import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  BloodGroup: string;
  position: number;
  RhFactor: string;
  units: string;
  hosp:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, BloodGroup: 'A', RhFactor: '+', units: '250',hosp:'Appollo Hospital, Life Line Hospital'},
  {position: 2, BloodGroup: 'B', RhFactor: '+', units: '160',hosp:'LifeLine Hospital, Care Hospital'},
  {position: 3, BloodGroup: 'O', RhFactor: '+', units: '140',hosp:'MedLife Hospital,Siri Hospital'},
  {position: 4, BloodGroup: 'AB', RhFactor: '+', units: '350',hosp:'Care Hospital'},
  {position: 5, BloodGroup: 'A', RhFactor: '-', units: '160',hosp:'Medicover Hospital, Rainbow Hospital'},
  {position: 6, BloodGroup: 'B', RhFactor: '-', units: '170',hosp:'Rainbow Hospital'},
  {position: 7, BloodGroup: 'O', RhFactor: '-', units: '180',hosp:'Siri Hospitals, Madhapur'},
  {position: 8, BloodGroup: 'AB', RhFactor: '-', units: '200',hosp:'LifeLine Hospital, Vijaya Medicals'},
];

@Component({
  selector: 'app-search-asst',
  templateUrl: './search-asst.component.html',
  styleUrls: ['./search-asst.component.css']
})

export class SearchAsstComponent implements OnInit {
  displayedColumns: string[] = ['position', 'BloodGroup', 'RhFactor', 'units','hosp'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }
  


  

} 
