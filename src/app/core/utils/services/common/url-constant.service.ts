import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConstantService {

  constructor() { }
  static clientList="/api/ClientAdmin/"
}
