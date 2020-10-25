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
      Authorization: 'Bearer BQB0VT2GEHfdlyzgl_Mq6-5bNXBKwqJcA3zICSjSPXgOEC6HDXN1w_0ZEtjB5_Q1C9xal9K0H0QhSTuOqQ4I42_DYMWDcx7JkR7Df5U_synoh7fqy3h4jDtVaUlqoG5BW-4Hgf0BpUnqFmR5OcCHPaCBKakw7MMScjU'
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
