import { TestBed } from '@angular/core/testing';

import { UrlConstantService } from './url-constant.service';

describe('UrlConstantService', () => {
  let service: UrlConstantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlConstantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
