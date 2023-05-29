import { TestBed } from '@angular/core/testing';

import { UsuarioDataServiceService } from './usuario-data-service.service';

describe('UsuarioDataServiceService', () => {
  let service: UsuarioDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
