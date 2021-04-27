import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { nameLastamePattern, emailPattern, canNotBeStrider } from '../../../shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameLastamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [ this.emailValidator ] ],
    username: ['', [Validators.required, this.vs.canNotBeStrider ] ],
    password: ['', [Validators.required, Validators.minLength(6) ] ],
    password2: ['', [Validators.required ] ]
  }, {
    validators: [ this.vs.fieldsEquals('password', 'password2') ]
  })

  get emailErrorMsj(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email is required';
    }
    if (errors?.pattern) {
      return 'Email is not in the correct format';
    }
    if (errors?.emailTaken) {
      return 'Email is already taken';
    }

    return '';
    
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Jose Barajas',
      email: 'test1@test.com',
      username: 'test',
      password: '123456',
      password2: '123456'
    });
  }

  fieldNoValid(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  submitMyForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
