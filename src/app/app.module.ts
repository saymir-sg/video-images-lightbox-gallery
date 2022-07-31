import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LightboxComponent } from './lightbox/lightbox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LightboxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
