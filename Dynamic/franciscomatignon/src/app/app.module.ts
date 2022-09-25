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

// database global import


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent,
    ProjectdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
