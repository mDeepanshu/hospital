import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ErrMsgModuleComponent } from './err-msg-module/err-msg-module.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//
import { AppComponent } from './app.component';
import { OpdComponent } from './opd/opd.component';
import { DoctorChamberComponent } from './doctor-chamber/doctor-chamber.component';
import { LabComponent } from './lab/lab.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BillComponent } from './bill/bill.component';
import { ToLabComponent } from './to-lab/to-lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmaPurchaseComponent } from './pharma-purchase/pharma-purchase.component';
import { PharmaAddPartyComponent } from './pharma-add-party/pharma-add-party.component';
import { PharmaAddItemComponent } from './pharma-add-item/pharma-add-item.component';
import { PharmaSellPrintComponent } from './pharma-sell-print/pharma-sell-print.component';
import { LabNewReportComponent } from './lab-new-report/lab-new-report.component';
import { OpdPrintComponent } from './opd-print/opd-print.component';

const routes: Routes = [
  { path: 'opd', component: OpdComponent },
  { path: 'lab', component: LabComponent },
  { path: 'doctorChamber', component: DoctorChamberComponent },
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'bill', component: BillComponent },
  { path: 'toLab', component: ToLabComponent },
  { path: 'pharmaSell', component: PharmacyComponent },
  { path: 'pharmaPurchase', component: PharmaPurchaseComponent },
  { path: 'addPharmaParty', component: PharmaAddPartyComponent },
  { path: 'pharmaAddItem', component: PharmaAddItemComponent },
  { path: 'labnewreport', component: LabNewReportComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OpdComponent,
    DoctorChamberComponent,
    LabComponent,
    LoginComponent,
    AdminPanelComponent,
    ErrMsgModuleComponent,
    NavBarComponent,
    BillComponent,
    ToLabComponent,
    PharmacyComponent,
    PharmaPurchaseComponent,
    PharmaAddPartyComponent,
    PharmaAddItemComponent,
    PharmaSellPrintComponent,
    LabNewReportComponent,
    OpdPrintComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
