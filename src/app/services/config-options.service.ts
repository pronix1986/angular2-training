import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class ConfigOptionsService {

  constructor(private localStorageService: LocalStorageService) { }

  storeEmail(email: string): void {
    this.localStorageService.setItem('email', email);
  }

  getEmail(): any {
    this.localStorageService.getItem('email');
  }

}
