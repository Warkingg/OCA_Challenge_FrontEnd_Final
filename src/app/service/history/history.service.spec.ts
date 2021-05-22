
import { HistoryService } from './history.service';
import { TestBed } from '@angular/core/testing';

describe('HistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryService = TestBed.get(HistoryService);
    expect(service).toBeTruthy();
  });
});
