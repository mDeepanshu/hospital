import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pharma-purchase',
  templateUrl: './pharma-purchase.component.html',
  styleUrls: ['./pharma-purchase.component.css'],
})
export class PharmaPurchaseComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private _snackBar: MatSnackBar
  ) {}
  medicineList: any[] = [];
  partyOptions: any[] = [];
  medicineOption: any[] = [];
  partyId = '';
  newItemForm = new FormGroup({
    party_name: new FormControl(null, Validators.required),
    setOne: new FormGroup({
      item_name: new FormControl(null, Validators.required),
      item_id: new FormControl(null),
      gst: new FormControl(null, Validators.required),
      packing: new FormControl(null, Validators.required),
      quantity_a: new FormControl(null, Validators.required),
      quantity_b: new FormControl(null, Validators.required),
      unit: new FormControl(null, Validators.required),
      rate: new FormControl(null, Validators.required),
      mrp: new FormControl(null, Validators.required),
      batch_no: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      expiry_date: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      discount: new FormControl(null, Validators.required),
    }),
    discount_total: new FormControl(null, Validators.required),
    grand_total: new FormControl(null, Validators.required),
    sub_total: new FormControl(null, Validators.required),
  });
  ngOnInit(): void {}
  onSubmit() {
    let obj = {
      batches: this.medicineList,
      discount: this.newItemForm.value.discount_total,
      total: this.newItemForm.value.grand_total,
      partyId: this.partyId,
      date: new Date(),
    };
    console.log(obj);

    this.mainService.pharmaPurchase(obj).then(() => {
      this._snackBar.open('Purchase Saved', 'Close');
    });
  }
  getMedicine(val: string) {
    this.mainService.getMedicine(val).then((data: any) => {
      console.log(data);
      this.medicineOption = data;
    });
  }
  matchParty(val: string) {
    this.mainService.matchParty(val).then((data: any) => {
      console.log(data);
      this.partyOptions = data;
    });
  }
  onSelectParty(val: string) {
    console.log(val);
    this.partyId = val;
  }
  medicineSelect(val: string) {
    this.newItemForm.patchValue({
      setOne: {
        item_id: val,
      },
    });
  }
  addToSet() {
    this.medicineList.push(this.newItemForm.value.setOne);
    let total =
      this.newItemForm.value.sub_total +
      this.newItemForm.value.setOne.rate *
        this.newItemForm.value.setOne.quantity;
    this.newItemForm.patchValue({
      sub_total: total,
    });
  }
  removeItem(i: number) {
    this.medicineList.splice(i, 1);
  }
}
