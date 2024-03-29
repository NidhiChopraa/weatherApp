import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';

import { FormsModule } from '@angular/forms';
import { ForecastComponent } from './forecast/forecast.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
