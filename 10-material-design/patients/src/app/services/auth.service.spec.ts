import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logins with user / user', () => {
    expect(service.login('user', 'user')).toBe(true);
  });

  it('logins incorrect with user / jjj', () => {
    expect(service.login('user', 'jjj')).toBe(false);
  });
});
