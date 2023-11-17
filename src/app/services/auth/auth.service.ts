import { Injectable, inject } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

export interface LoginRequestParams {
  password: string;
  userId: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  name: string;
  role: string;
  mobile: string;
  userId: string;
  isMobileVerificationRequired: boolean;
  collectInterestedTopics: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #config = inject(ConfigService)
  #http = inject(HttpClient)
  #token = inject(TokenService)
  #router = inject(Router)

  constructor() { }

  private readonly authAPI = `${this.#config.API_BASE_URL}/auth/`;

  login(data: LoginRequestParams): Promise<LoginResponse> {
    const url = `${this.authAPI}/login`;
    return lastValueFrom(this.#http.post<LoginResponse>(url, data));
  }

  isLoggedIn(): Promise<boolean> {
    return this.#token.isTokenExist();
  }

  async getUserId(): Promise<string> {
    return (await this.#token.getDecodedTokenData())?.userId ?? '';
  }

  logout(nextRoute?: string, errorCode?: string): void {
    this.#token.removeToken();
    this.#router.navigate(['/login'], { queryParams: (nextRoute ? { next: nextRoute } : {}) });
  }
}
