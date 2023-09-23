import { Component } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent {

  constructor(private serviceDictionary : DictionaryService){}


  getService() : DictionaryService{
    return this.serviceDictionary;
  }

  playAudio(){
    let audio: HTMLAudioElement = new Audio(this.getService().currentResult[0].phonetics[0].audio);
     audio.play();

  }
}
