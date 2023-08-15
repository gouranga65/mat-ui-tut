import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './component/input/input.component';
import { ExportModule } from "Export.module";
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
