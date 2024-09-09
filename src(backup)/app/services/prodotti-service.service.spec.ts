import { TestBed } from '@angular/core/testing';

import { ProdottiServiceService } from './prodotti-service.service';

describe('ProdottiServiceService', () => {
  let service: ProdottiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
