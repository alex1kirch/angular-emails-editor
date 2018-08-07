import { Component, OnInit } from '@angular/core';
import { EmailGeneratorService } from '../email-generator.service';

@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.css']
})
export class ShareFormComponent implements OnInit {
  boardName = 'Board name'; // default board name
  emailList = ['sidorov@gmail.com']; // default email list

  showEmailCount() {
    alert(this.emailList.length);
  }

  addRandomEmail(): void {
    this.emailList.push(this.emailGeneratorService.generate());
  }

  constructor(private emailGeneratorService: EmailGeneratorService) {}

  ngOnInit() {}
}
