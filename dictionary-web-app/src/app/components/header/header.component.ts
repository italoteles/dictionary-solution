import { Component, OnInit } from '@angular/core';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';
import { Typography } from 'src/app/models/Typography';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkModeChecked : boolean = false;

  typographys!: Typography[] ;

  selectedTypography!: Typography;

  ngOnInit() {
    this.typographys = [
      {
        name: 'Sans Serif', font: 'inter'
      },
      {
        name: 'Serif', font: 'lora'
      },
      {
        name: 'Mono', font: 'inconsolata'
      }];

    //this.selectedTypography =  {name: 'Sans Serif', font: 'inter'}

  }

  changeColorTheme(e : InputSwitchOnChangeEvent){
    this.darkModeChecked = e.checked;


  }
}
