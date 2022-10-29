import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RollADieComponent } from './roll-a-die/roll-a-die.component';
import { RollHistoryComponent } from './roll-history/roll-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    RollADieComponent,
    RollHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    ,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
