import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShareFormComponent } from './share-form/share-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareFormComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
