import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';
import { EmailsEditorChipComponent } from './emails-editor/emails-editor-chip/emails-editor-chip.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmailsEditorComponent, EmailsEditorChipComponent],
  exports: [EmailsEditorComponent]
})
export class SharedModule {}
