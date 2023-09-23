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

  constructor(private http : HttpClient) { }

  public getMeaning(word : string) : Observable<ResultDictionary>{

    return this.http.get<ResultDictionary>(this.url+word).pipe(take(1));
  }

}
