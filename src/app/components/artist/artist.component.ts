import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  albums: any = [];

  constructor(private spotify: SpotifyService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      let id = params.id;

      this.spotify.getArtist(id)
        .subscribe(data => {
          this.artist = data;
          this.artist.url = this.artist['images'][0].url;
        });

      this.spotify.getAlbumsByArtist(id)
        .subscribe(data => {
          data.splice(7);
          this.albums = data;
        });
    });

  }
}
