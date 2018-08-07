import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {
  @Input() emailList = [];

  constructor() {}

  ngOnInit() {}

  private removeEmailByIndex(index: number) {
    this.emailList.splice(index, 1);
  }

  private addEmail(email: string) {
    // Remove spaces on start and end of the email
    const trimmedEmail = email.trim();

    // Add email only if not empty and white space
    if (trimmedEmail.length > 0) {
      this.emailList.push(trimmedEmail);
    }
  }

  paste(event: ClipboardEvent): void {
    event.preventDefault();
    event.clipboardData
      .getData('Text') // Gets the text pasted
      .split(/,|\n/) // Splits it when a COMMA or NEWLINE
      .forEach(value => {
        this.addEmail(value);
      });
  }

  insert(event: KeyboardEvent): void {
    event.preventDefault();
    const emailInput = (event.target as HTMLInputElement);
    const value: string = emailInput.value;
    emailInput.value = ''; // Set processed value to empty

    this.addEmail(value);
  }
}
