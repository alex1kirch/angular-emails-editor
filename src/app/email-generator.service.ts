import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailGeneratorService {

  constructor() { }

  generate(): string {
    const count = (Date.now() % 20) + 1;
    const sourceArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'.split('');
    const base = sourceArray.length;
    let randomNumber = Math.ceil(Math.random() * (Math.pow(base, count) - 1));
    let email = '';

    while (randomNumber !== 0) {
      email += sourceArray[randomNumber % base];
      randomNumber = Math.trunc(randomNumber / base);
    }

    email += '@gmail.com';
    return email;
  }
}
