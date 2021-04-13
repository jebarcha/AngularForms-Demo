import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'RTX 4080ti',
    price: 10,
    stock: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid &&
           this.myForm?.controls.product?.touched

  }

  validPrice(): boolean {
    return this.myForm?.controls.price?.touched &&
           this.myForm?.controls.price?.value <= 0;
  }

  //save(myForm: NgForm) {
  //  console.log(myForm.value);
  //}
  save() {
    //console.log(this.myForm);
    // if (this.myForm.controls.price.value < 0) {
    //   console.log('No posted');
    //   return;
    // }
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
