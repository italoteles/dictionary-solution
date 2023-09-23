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
      this.dictionaryService.currentResult = null;
      this.dictionaryService.getMeaning(this.searchText).subscribe({
        next: (result: ResultDictionary) => {

          this.dictionaryService.currentResult = result;


        },
        error: (error: any) => {
          console.error(error);
          this.dictionaryService.error = error;
        }
      })

    }
  }

  searchWordClick(){
    if (this.formGroup.valid) {
      this.dictionaryService.currentResult = null;
      this.dictionaryService.getMeaning(this.searchText).subscribe({
        next: (result: ResultDictionary) => {

          this.dictionaryService.currentResult = result;


        },
        error: (error: any) => {
          console.error(error);
        }
      })

    }
  }

  getService() : DictionaryService{
    return this.dictionaryService;
  }


}
