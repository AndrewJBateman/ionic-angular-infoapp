import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InfoService, SearchType } from './../../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  results: Observable<any>;
  searchTerm: '';
  type: SearchType = SearchType.all;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.infoService.searchData(this.searchTerm, this.type);
  }
}
