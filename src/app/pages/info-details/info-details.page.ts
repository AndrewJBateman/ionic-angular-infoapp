import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfoService } from './../../services/info.service';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.page.html',
  styleUrls: ['./info-details.page.scss'],
})

export class InfoDetailsPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private infoService: InfoService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.infoService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
