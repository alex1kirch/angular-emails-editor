import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsEditorChipComponent } from './emails-editor-chip.component';

describe('EmailsEditorChipComponent', () => {
  let component: EmailsEditorChipComponent;
  let fixture: ComponentFixture<EmailsEditorChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsEditorChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsEditorChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
