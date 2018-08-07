import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsEditorComponent } from './emails-editor.component';

describe('EmailsEditorComponent', () => {
  let component: EmailsEditorComponent;
  let fixture: ComponentFixture<EmailsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
