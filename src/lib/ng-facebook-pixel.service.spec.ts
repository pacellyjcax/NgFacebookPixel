import { TestBed } from '@angular/core/testing';

import { NgFacebookPixelService } from './ng-facebook-pixel.service';

describe('NgFacebookPixelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFacebookPixelService = TestBed.get(NgFacebookPixelService);
    expect(service).toBeTruthy();
  });
});
