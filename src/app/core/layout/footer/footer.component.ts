import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../../notifications/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public notes$: Observable<any>;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.notes$ = this.store.select$();
  }
}
