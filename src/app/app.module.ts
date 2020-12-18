import { DateFormatterService } from './date-formatter.service';
import { TableModule } from './table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';


@NgModule({
  declarations: [
    AppComponent,
      MonthPickerComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [DateFormatterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

