import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RemoveParenthesisPipe } from './pipes/remove-parenthesis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemoveParenthesisPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
