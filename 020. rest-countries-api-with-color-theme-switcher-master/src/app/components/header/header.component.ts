import { Component } from '@angular/core';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  lightMode: boolean = this.getTheme() ? JSON.parse(this.getTheme()!) : false;
  faMoon = faMoon;
  farMoon = farMoon;

  ngOnInit(): void {
    this.renderMode(); // ao iniciar, atualizar o tema da página inteira correspondente ao tema selecionado
  }

  saveTheme(){
    localStorage.setItem('prefTheme', JSON.stringify(this.lightMode));
  }

  getTheme(){
    const theme = localStorage.getItem('prefTheme');
    if(theme) return theme;
    return null
  }

  switchMode() {
    this.lightMode = !this.lightMode;
    this.saveTheme();
    this.renderMode();
  }

  renderMode() {
    const HTML = document.getElementsByTagName('html')[0];
    this.lightMode ? HTML.classList.remove('dark') : HTML.classList.add('dark');
  }
}
