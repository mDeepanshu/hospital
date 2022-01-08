import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatentData } from '../models/patentData';
import { MainServiceService } from '../main-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css'],
})
export class OpdComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  docList: any[] = [];
  patientForm = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    mobile: new FormControl(null, Validators.required),
    sex: new FormControl(null, Validators.required),
    consultingDoc: new FormControl(null),
    ref_doc: new FormControl(null),
    address: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    fees: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    this.matchDoc('');
  }
  onSubmit() {
    console.log('llllllllll');

    this.mainService.addPatient(this.patientForm.value).then(() => {
      this._snackBar.open('Patient Saved', 'Close');
    });
  }
  matchDoc(val: string) {
    this.mainService.matchDoctor(val).then((data: any) => {
      this.docList = data;
    });
  }
  onSelectDoc(name: string) {
    this.docList.forEach((element) => {
      if (element.name == name) {
        this.patientForm.patchValue({
          fees: element.visiting_charge,
        });
      }
    });
  }
  print() {
    this.mainService.printOpd.next(this.patientForm.value);
    setTimeout(() => {
      window.print();
    }, 0);
  }
}
