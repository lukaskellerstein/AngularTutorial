import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NormalComponent } from './normal/normal.component';
import { OnPushComponent } from './on-push/on-push.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
