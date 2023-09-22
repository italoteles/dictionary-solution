import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit{
  searchText : string = "";
  formGroup!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      word: [' ', Validators.required]
    });
  }

  searchWord(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.word);

  }
}
