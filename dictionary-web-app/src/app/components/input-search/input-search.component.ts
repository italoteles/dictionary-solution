import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultDictionary } from 'src/app/models/ResultDictionary';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit{
  searchText : string = "";
  formGroup!: FormGroup;
  resultSearch : ResultDictionary;


  constructor(private fb: FormBuilder, private dictionaryService : DictionaryService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      word: [' ', Validators.required]
    });
  }


  searchWord(event) {
    if (event.keyCode === 13 && this.formGroup.valid) {
      this.dictionaryService.getMeaning(this.searchText).subscribe({
        next: (result: ResultDictionary) => {
          console.log(result);
          this.resultSearch = result;

        },
        error: (error: any) => {
          console.error(error);
        }
      })

    }
  }


}
