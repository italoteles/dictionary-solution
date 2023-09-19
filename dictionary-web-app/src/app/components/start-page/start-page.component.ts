import { Component, ElementRef } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  constructor(private theme: ThemesService) { }


  // public loraDark(){
  //   this.theme.loadTheme('lora-dark');
  // }

}
