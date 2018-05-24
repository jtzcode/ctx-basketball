import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BClubMessageService {

  private messageSubject = new Subject<any>();

  constructor() { }

  sendMessage(message: string) {
    this.messageSubject.next({ text: message });
  }

  clearMessage() {
    this.messageSubject.next();
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
