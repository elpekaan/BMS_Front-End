import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { LoginRequest } from 'src/core/models/request/login-request.model';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LoginPageComponent implements OnInit  {

  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}


  async login() {
  
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['../DefaultLayout/admin/dashboard']);
    } else if (status == ResponseStatus.Invalid)
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email veya şifre hatalı' });
      this.loginRequest.password = '';
  }

  ngOnInit() {
    const switchers: Element[] = Array.from(document.querySelectorAll('.switcher'));

    switchers.forEach((item: Element) => {
      item.addEventListener('click', function() {
        const parentElement = (item.parentElement as HTMLElement);
        switchers.forEach((el: Element) => el.parentElement!.classList.remove('is-active'));
        parentElement.classList.add('is-active');
      });
    });
  }
}
