import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShareFormComponent } from './share-form/share-form.component';
import { EmailGeneratorService } from './email-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    ShareFormComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [EmailGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
