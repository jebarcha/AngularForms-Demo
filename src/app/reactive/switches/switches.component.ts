import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.myForm.reset({ 
      ...this.person ,
      conditions: false
    });

    //RxJs
    // subscribe to form changes
    // this.myForm.get('conditions')?.valueChanges.subscribe( (newValue) => {
    //   console.log(newValue);
    // });

    this.myForm.valueChanges.subscribe( ({ conditions, ...rest }) => {
      //delete form.conditions;
      //this.person = form;
      this.person = rest;
      console.log(this.person);
    });

  }

  save() {
    
    const formValue = { ...this.myForm.value };
    delete formValue.conditions;
    this.person = formValue;

    //console.log(formValue);

  }


}
