import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent, SafeHtmlPipe }  from './app.component';
// import { Collapse } from './collapse.components';

import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, SafeHtmlPipe ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
