import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { LabList } from '../models/getLabs';
@Component({
  selector: 'app-to-lab',
  templateUrl: './to-lab.component.html',
  styleUrls: ['./to-lab.component.css'],
})
export class ToLabComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  panelOpenState = false;
  labList: any[] = [];
  patientList: any[] = [];
  selectedLab: any[] = [];
  defaultSelected: number = -1;
  selection: number = -1;
  amount: number = 0;
  patientId: string = '';
  ngOnInit() {
    this.mainService.getLabs().then((data: any) => {
      console.log(data);
      this.labList = data;
    });
  }
  selectedOptions = [];
  selectedOption: any;
  onNgModelChange(event: any) {
    this.amount = 0;
    console.log(event);

    this.selectedOptions.forEach((element: any) => {
      this.amount += element.price;
      this.selectedLab.push({
        test_id: element._id,
        amount: element.price,
      });
    });
    this.selectedOption = event;
  }
  matchPatient(val: string) {
    this.mainService.matchPatient(val).then((data: any) => {
      this.patientList = data;
    });
  }
  patientSelect(i: number) {
    console.log(i);
    this.defaultSelected = i;
    this.patientId = this.patientList[i]._id;
    console.log(this.patientId);
  }
  prescribeLab() {
    console.log(this.patientId, this.selectedLab);
    this.mainService
      .prescribeLab(this.patientId, this.selectedLab)
      .then((data) => {
        console.log(data);
      });
  }
}
