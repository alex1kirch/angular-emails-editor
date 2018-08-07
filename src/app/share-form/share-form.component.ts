import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.css']
})
export class ShareFormComponent implements OnInit {
  boardName = 'Board name';

  showEmailCount(emailCount: number) {
    alert(emailCount);
  }

  constructor() {}

  ngOnInit() {}
}
