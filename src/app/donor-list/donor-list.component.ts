import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  BloodGroup: string;
  position: number;
  name:string;
  RhFactor: string;
  phno: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:'P.Sruthi', BloodGroup: 'B', RhFactor: '-',phno:95269544441},
  {position: 2, name:'L.Eshwar',BloodGroup: 'B', RhFactor: '-', phno:9345674463},
  {position: 3, name:'B.Kusuma',BloodGroup: 'O', RhFactor: '+', phno:8377459032},
  {position: 4, name:'B.Kirthi',BloodGroup: 'A', RhFactor: '+',phno:7906439985},
  {position: 5, name:'S.Sanjay',BloodGroup: 'O', RhFactor: '-', phno:9912762345},
  {position: 6, name:'K.Dinesh',BloodGroup: 'O', RhFactor: '+',phno:9545378897},
  {position: 7, name:'V.Lohitha',BloodGroup: 'B', RhFactor: '+',phno:9298336889},
  {position: 8, name:'A.Krishna',BloodGroup: 'AB', RhFactor: '-',phno:7896456004},
  {position: 9, name:'K.Anjali',BloodGroup: 'B', RhFactor: '-', phno:7730093348},
  {position: 10, name:'B.Vinay',BloodGroup: 'A', RhFactor: '+',phno:9589378897},
  {position: 11, name:'V.Lohitha',BloodGroup: 'B', RhFactor: '+',phno:9987336889},
  {position: 12, name:'A.Karthik',BloodGroup: 'AB', RhFactor: '+',phno:7896478904},
];

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','BloodGroup', 'RhFactor','phno'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
