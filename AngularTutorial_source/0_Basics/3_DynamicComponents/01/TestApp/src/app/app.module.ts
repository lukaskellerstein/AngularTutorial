import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DisplayComponent } from "./display/display.component";
import { TimerComponent } from './timer/timer.component';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DisplayComponent,
    TimerComponent,
    SimpleAlertViewComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [SimpleAlertViewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
