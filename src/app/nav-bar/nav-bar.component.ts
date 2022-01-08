import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public mainService: MainServiceService) {}
  navbarLabels = [
    ['SELL', 'ADD ITEM', 'ADD PARTY', 'PURCHASE'],
    ['GENRATE REPORT', 'ADD REPORT'],
    ['ADD PATIENT', 'TO LAB'],
    [''],
  ];
  navbarLinks = [
    ['pharmaSell', 'pharmaAddItem', 'addPharmaParty', 'pharmaPurchase'],
    ['lab', 'labnewreport'],
    ['opd', 'toLab'],
    [''],
  ];
  title = '';
  ngOnInit() {
    switch (this.mainService.navBarFor) {
      case 0:
        this.title = 'PHARMACY';
        break;
      case 1:
        this.title = 'LAB';
        break;
      case 2:
        this.title = 'OPD';
        break;
      case 3:
        break;
    }
  }

  logOff() {
    this.mainService.login.next(true);
  }
}
