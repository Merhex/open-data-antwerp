import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DataDisplayComponent } from './data-display/data-display.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
   declarations: [
      AppComponent,
      DataDisplayComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      NgxChartsModule,
      HttpClientModule,
      MatCardModule,
      NgxEchartsModule.forRoot({
         echarts
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
