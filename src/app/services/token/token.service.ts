import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  readonly #tokenKey = 'DMS_DEALER_AUTH'
  constructor() { }


  saveToken(data: string): Promise<void> {
    localStorage.setItem(this.#tokenKey, data);
    return Promise.resolve();
  }

  getToken(): Promise<string | null> {
    const token = localStorage.getItem(this.#tokenKey);
    return Promise.resolve(token);
  }

  removeToken(): Promise<void> {
    localStorage.removeItem(this.#tokenKey);
    return Promise.resolve();
  }

  async getDecodedTokenData(): Promise<{ userId: string; role: string } | null> {
    try {
      const token: any = await this.getToken();
      if (!token) {
        return null;
      }
      return JSON.parse(window.atob(token.split('.')[1]));
    } catch (error: any) {
      return null;
    }
  }

  async isTokenExist(): Promise<boolean> {
    try {
      return await this.getToken() ? true : false;
    } catch (error: any) {
      return false;
    }
  }
}
