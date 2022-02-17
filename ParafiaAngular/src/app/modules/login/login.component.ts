import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, first, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({ username: '', password: '' });

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CommonService,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    this.service
      .login(this.loginForm.value)
      .pipe(
        switchMap((result) => {
          console.log(result);
          if (result === 'errorLogin') {
            alert('Wprowadź poprawny login lub hasło');
            return of(undefined);
          } else {
            localStorage.setItem('token', result);
            return this.service.getUser(this.loginForm.value.username);
          }
        }),
        first(),
        filter((x): x is User[] => !!x),
        map((x) => x[0])
      )
      .subscribe((user) => {
        localStorage.setItem('UserId', user.UserId);
        this.router.navigateByUrl('admin-panel');
      });
  }
}
