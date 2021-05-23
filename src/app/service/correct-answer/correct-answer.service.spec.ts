

import { CorrectAnswerService } from './correct-answer.service';
import { TestBed } from '@angular/core/testing';

describe('CorrectAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrectAnswerService = TestBed.get(CorrectAnswerService);
    expect(service).toBeTruthy();
  });
});
