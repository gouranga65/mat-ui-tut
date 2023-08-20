import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './component/input/input.component';
import { ExportModule } from "Export.module";
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { AutocompleteTwoComponent } from './component/autocomplete-two/autocomplete-two.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    AutocompleteTwoComponent,
    MenuBarComponent,
    HomeComponent
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
