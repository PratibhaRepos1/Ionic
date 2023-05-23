import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'default text start here';
  constructor() {}

  reasonInput = document.querySelector('#input-reason');
  amountInput = document.querySelector('#input-amount');
  btnCancel = document.querySelector('#btn-cancel');
  btnConfirm = document.querySelector('#btn-confirm');

  onConfirm() {
    console.log('It works!');
  };

  onClick() {
    this.text = 'Changed!';
  }


}
