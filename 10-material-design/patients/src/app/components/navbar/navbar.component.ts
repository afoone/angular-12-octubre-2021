import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInGuard } from 'src/app/guard/logged-in.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public guard: LoggedInGuard;

  constructor(public authService: AuthService, private router: Router) {
    this.guard = new LoggedInGuard(authService);
  }

  ngOnInit(): void {}

  logout = () => {
    this.authService.logout();
    this.router.navigate(['/login']);
  };
}
