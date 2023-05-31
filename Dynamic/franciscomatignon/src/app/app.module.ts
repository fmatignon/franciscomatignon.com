import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { NgOptimizedImage } from '@angular/common';
import { NoPageComponent } from './no-page/no-page.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgPipesModule } from 'ngx-pipes';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { FormsModule } from '@angular/forms';
import { EmailService } from './email.service';

import { TranslateLoader, TranslateModule  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageBarComponent } from './language-bar/language-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent,
    ProjectdetailsComponent,
    NoPageComponent,
    ModalGalleryComponent,
    LanguageBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule,
    NgbModule,
    NgPipesModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
    faInstagram,
    faLinkedin)   
  }
}
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
