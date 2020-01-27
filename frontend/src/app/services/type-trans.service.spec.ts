import { TestBed } from '@angular/core/testing';

import { TypeTransService } from './type-trans.service';

describe('TypeTransService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeTransService = TestBed.get(TypeTransService);
    expect(service).toBeTruthy();
  });
});
