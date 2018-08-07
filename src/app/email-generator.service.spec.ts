import { TestBed, inject } from '@angular/core/testing';

import { EmailGeneratorService } from './email-generator.service';

describe('EmailGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailGeneratorService]
    });
  });

  it('should be created', inject([EmailGeneratorService], (service: EmailGeneratorService) => {
    expect(service).toBeTruthy();
  }));

  it('should be generate a not empty string', inject(
    [EmailGeneratorService],
    (service: EmailGeneratorService) => {
      const generatedString = service.generate();

      expect(generatedString.length).not.toEqual(0);
    }
  ));
});
