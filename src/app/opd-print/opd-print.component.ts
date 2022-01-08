import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-opd-print',
  templateUrl: './opd-print.component.html',
  styleUrls: ['./opd-print.component.css'],
})
export class OpdPrintComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  d = new Date();
  date = `${this.d.getDate()}/${this.d.getMonth() + 1}/${this.d.getFullYear()}`;
  basicObj = {
    first_name: '',
    last_name: '',
    category: '',
    consultingDoc: '',
    paymentMode: '',
    fees: '',
  };
  ngOnInit() {
    this.mainService.printOpd.subscribe((data: any) => {
      this.basicObj = data;
      console.log(this.basicObj);
    });
  }
}
