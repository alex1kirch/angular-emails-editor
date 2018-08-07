import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostBinding } from '@angular/core';
import * as EmailValidator from 'email-validator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'emails-editor-chip',
  templateUrl: './emails-editor-chip.component.html',
  styleUrls: ['./emails-editor-chip.component.css'],
})
export class EmailsEditorChipComponent implements OnInit {
  @Input() email: string;
  @Output() emailRemoved: EventEmitter<void> = new EventEmitter();
  @HostBinding('class.emails-editor-chip--invalid-email') isEmailNotValid: boolean;

  constructor() { }

  ngOnInit() {
    this.isEmailNotValid = !this.isEmailValid();
  }

  isEmailValid() {
    return EmailValidator.validate(this.email);
  }

  removeEmail() {
    this.emailRemoved.emit();
  }
}
