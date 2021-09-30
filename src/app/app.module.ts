import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiographieComponent } from './biographie/biographie.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { AboutComponent } from './about/about.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    BiographieComponent,
    FormationComponent,
    ContactComponent,
    CompetencesComponent,
    LoremIpsumComponent,
    AboutComponent
  ],
  imports: [ NgxPaginationModule,
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, MatCardModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
