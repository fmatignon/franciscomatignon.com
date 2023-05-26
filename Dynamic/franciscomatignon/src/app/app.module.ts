import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { faInstagram, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

import * from '@ng-bootstrap'
// database global import


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent,
    ProjectdetailsComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
    faInstagram,
    faInstagramSquare)   
  }
}
