import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
