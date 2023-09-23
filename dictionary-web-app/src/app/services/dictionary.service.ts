import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ResultDictionary } from '../models/ResultDictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  public currentResult : ResultDictionary;
  public error : any;

  constructor(private http : HttpClient) { }

  public getMeaning(word : string) : Observable<ResultDictionary>{

    return this.http.get<ResultDictionary>(this.url+word).pipe(take(1));
  }

  public getSynonyms(index : number){
    let allSynonyms : string = "";
    if (this.currentResult[0].meanings[index].synonyms){
      if(this.currentResult[0].meanings[index].synonyms.length == 1){
        return this.currentResult[0].meanings[index].synonyms
      }
      else{
        if (this.currentResult[0].meanings[index].synonyms.length == 0){
          return "no synonyms";
        }
        else{
          this.currentResult[0].meanings[index].synonyms.forEach(s => {
            allSynonyms = allSynonyms + ', ' + s;

          });
          return allSynonyms.substring(1);
        }
      }

    }
  }

}
