import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  public message: string;
  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.message = '';
    this.form = formBuilder.group({
      user: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    console.log(this.form);
    if (!this.authService.login(this.form.value.user, this.form.value.password)) {
      this.message = 'Credenciales incorrectas';
    } else {
      this.router.navigate(['/patients/list']);
    }
  }

  ngOnInit(): void {}
}
