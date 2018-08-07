import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {
  emailList = ['sidorov@gmail.com'];

  constructor() {}

  ngOnInit() { }

  getEmailCount(): number {
    return this.emailList.length;
  }

  addEmail(): void {
    // TODO: implement add random email
  }
}
