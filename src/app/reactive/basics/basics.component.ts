import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  
  // myForm: FormGroup = new FormGroup({
  //   'name' : new FormControl('RTX 4080ti'),
  //   'price': new FormControl(0),
  //   'stock': new FormControl(0),
  // });
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    price: ['', [Validators.required, Validators.min(0)] ],
    stock: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //note:use reset instead of setValue
    //this.myForm.setValue({
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 1000
    });
  }

  fieldIsNotValid(field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
