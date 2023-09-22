import { Meaning } from "./Meaning";
import { Phonethics } from "./Phonethics";

export interface ResultDictionary {
  word : string;
  phonetic : string;
  phonetics : Phonethics[];
  meanings : Meaning[];
  sourceUrls : string[];

}
