import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css'],
})
export class LabComponent implements OnInit {
  constructor(
    public mainService: MainServiceService,
    private fb: FormBuilder
  ) {}
  reportParameters: any[] = [];
  defaultSelected = -1;
  selection: number = 0;
  selectedLabId = '';
  selectedPatientId = '';
  selectedLabData = <{ parameters: any }>{};
  labReport = new FormGroup({
    params: new FormArray([]),
  });
  ngOnInit() {
    this.mainService.pendingTest().then((data: any) => {
      this.reportParameters.push(data.qrw);
    });
  }
  labParams(_id: string) {
    (<FormArray>this.labReport.get('params')).clear();
    this.mainService.labParams(_id).then((data: any) => {
      this.selectedLabData = data;
      data.parameters.forEach((element: any) => {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.labReport.get('params')).push(control);
      });
    });
  }
  selectLab(_id: any, i: number, ii: number) {
    this.selection = i;
    this.selectedPatientId = '';
    this.labParams(_id);
  }
  get getControls() {
    return (<FormArray>this.labReport.get('params')).controls;
  }
  onSubmit() {
    console.log(this.labReport.value);
    let arr: any[] = [];
    for (let i = 0; i < this.labReport.value.params.length; i++) {
      arr.push({
        name: this.selectedLabData.parameters[i].name,
        unit: this.selectedLabData.parameters[i].unit,
        reading: this.labReport.value.params[i],
      });
    }
    this.mainService.saveLabReport('', arr);
  }
}
