import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);
  
  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  fieldIsNotValid(field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
  }

  add() {
    if (this.newFavorite.invalid) {
      return;
    }
    
    //(this.myForm.controls.favorites as FormArray).push()
    //this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArr.push(this.fb.control(this.newFavorite.value, Validators.required));

    this.newFavorite.reset();
  }

  remove(index: number) {
    this.favoritesArr.removeAt(index);
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
