import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  propertyForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    images: this.fb.array([
      this.fb.control(''),
    ]),
    address: ['', Validators.required],
    locality: ['', Validators.required],
    price: [10000, Validators.required],
    area: [0],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get images() {
    return this.propertyForm.get('images') as FormArray;
  }

  addImage() {
    this.images.push(this.fb.control(''))
  }

  onRemove(index: number) {
    this.images.removeAt(index);
  }

  reset() {
    this.propertyForm.reset();
  }

  submit() {
    console.log(this.propertyForm.status);
  }
}
