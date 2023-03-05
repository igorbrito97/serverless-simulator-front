import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  label: string;
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService){
    this.selectedLanguage = new FormControl('pt');
    translate.addLangs(['en', 'pt'])
    translate.setDefaultLang(this.selectedLanguage.getRawValue());
  }

  languages: Language[] = [
    { label: 'Português', value: 'pt' }, 
    { label: 'English', value: 'en' }
  ]
  selectedLanguage: FormControl;


  translateLanguage() {
    this.translate.use(this.selectedLanguage.getRawValue());
  }
  
}
