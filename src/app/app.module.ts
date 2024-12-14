import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule, DateTimePickerAllModule, TimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ProgressBarAllModule } from '@syncfusion/ej2-angular-progressbar';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { LinearGaugeAllModule } from '@syncfusion/ej2-angular-lineargauge';
import { ButtonAllModule, RadioButtonAllModule  } from '@syncfusion/ej2-angular-buttons';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';
import { CircularGaugeAllModule } from '@syncfusion/ej2-angular-circulargauge';
import { TextBoxAllModule, SliderAllModule } from '@syncfusion/ej2-angular-inputs';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TabModule,
    DatePickerModule,
    ChartAllModule,
    GridModule,
    DashboardLayoutModule,
    ProgressBarAllModule,
    DropDownListModule,
    LinearGaugeAllModule,
    AccumulationChartAllModule,
    ButtonAllModule,
    DialogAllModule,
    CircularGaugeAllModule,
    DateTimePickerAllModule,
    TimePickerAllModule,
    TextBoxAllModule,
    SliderAllModule,
    RadioButtonAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
