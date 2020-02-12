import { TestBed } from '@angular/core/testing';

import { PlacesServices } from './places.service';

describe('PlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesServices = TestBed.get(PlacesServices);
    expect(service).toBeTruthy();
  });
});
