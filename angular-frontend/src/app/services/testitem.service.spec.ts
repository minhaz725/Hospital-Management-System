import { TestBed } from '@angular/core/testing';

import { TestitemService } from './testitem.service';

describe('TestitemService', () => {
  let service: TestitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
