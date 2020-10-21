import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from "@angular/router";
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {

      this.spotify.getTerm(params['q'])
        .subscribe((response: any) => {
          this.artists = response;
        });
    });
  }
}
