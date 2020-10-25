import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAnCpKQmdmIdlbqBlQSD7ixupR5jLaiNxAxz9T_H1xxlO8fhu9wwG-3_oob-Vv3tudV029FSe43mzkVKyrT321IRW_gujhlnj0RkLjvz7CVjUyxfsc-6asHXkqMA-kmnxF4zvKlf0cpRlt8Y1773c3KFzd_NxhO6jY'
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getAlbumsByArtist(id: string) {
    return this.getQuery(`artists/${id}/albums`)
      .pipe(map((data: any) => data.items));
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
      .pipe(map((data: any) => data.albums.items));
  }

  getTerm(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
