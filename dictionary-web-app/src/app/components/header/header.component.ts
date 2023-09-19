import { Component } from '@angular/core';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  darkModeChecked : boolean = false;

  changeColorTheme(e : InputSwitchOnChangeEvent){
    this.darkModeChecked = e.checked;

  }
}
