import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingComponent } from './listing/listing.component';
import { SlugifyPipe } from './slugify.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPropertyComponent } from './add-property/add-property.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    SlugifyPipe,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
