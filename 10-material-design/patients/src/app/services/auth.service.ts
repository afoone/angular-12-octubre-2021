import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'user') {
      localStorage.setItem('user', user);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUser(): string {
    return localStorage.getItem('user') || '';
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}
