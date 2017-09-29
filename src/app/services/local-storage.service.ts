import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, obj: any): void {
    localStorage.setItem(key, obj);
  }

  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
