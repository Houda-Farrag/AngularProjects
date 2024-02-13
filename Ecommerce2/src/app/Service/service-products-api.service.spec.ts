import { TestBed } from '@angular/core/testing';

import { ServiceProductsApiService } from './service-products-api.service';

describe('ServiceProductsApiService', () => {
  let service: ServiceProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
