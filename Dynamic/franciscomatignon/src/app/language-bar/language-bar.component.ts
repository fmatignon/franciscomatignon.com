import { Component, OnInit } from '@angular/core';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en')
    const lang = this.translate.getBrowserLang()
    if (this.translate.getLangs().includes(String(lang))) {
      this.translate.use(String(lang))
    }
    else this.translate.use(this.translate.getDefaultLang())
    
  }
  switchLang(lang:string){
    this.translate.use(lang)
  }
  ngOnInit() {
    console.log(this.translate.currentLang)
    console.log(this.translate.getBrowserLang())    
  }
}
