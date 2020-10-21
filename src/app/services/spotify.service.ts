import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
      .pipe(map((data: any) => data.albums.items));
  }

  getTerm(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDQSBvOUuWVa2SBu4MJ9bjSf3wfhUuZikdtn4FehACF58R9eT7p-_fnbd6zlFihSQj16Fif2lYNkHVFmPY'
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }
}
