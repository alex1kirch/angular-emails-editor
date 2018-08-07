import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmailsEditorComponent],
  exports: [EmailsEditorComponent]
})
export class SharedModule {}
