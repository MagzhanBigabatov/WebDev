import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';

import {  } from "./reg_login.service";

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
