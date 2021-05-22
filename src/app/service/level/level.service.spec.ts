

import { LevelService } from './level.service';
import {TestBed} from '@angular/core/testing';

describe('LevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevelService = TestBed.get(LevelService);
    expect(service).toBeTruthy();
  });
});
