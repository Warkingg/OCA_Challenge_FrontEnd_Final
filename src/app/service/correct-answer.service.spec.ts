import { TestBed } from '@angular/core/testing';

import { CorrectAnswerService } from './correct-answer.service';

describe('CorrectAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrectAnswerService = TestBed.get(CorrectAnswerService);
    expect(service).toBeTruthy();
  });
});
