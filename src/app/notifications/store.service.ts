import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private notifications = [];
  private notifications$ = new BehaviorSubject<any[]>([]);

  constructor() {}

  public select$ = () => this.notifications$.asObservable();
  public dispathNotification(notification) {
    this.notifications.push(notification);
    this.notifications$.next([...this.notifications]);
  }
}
