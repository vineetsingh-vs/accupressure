import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  private key = 'yutrtcfcbv876880kjlkhkjgjf';

  public encrypt(plainText: string): string {
    return CryptoJS.AES.encrypt(plainText, this.key).toString();
  }
}
