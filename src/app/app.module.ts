import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
