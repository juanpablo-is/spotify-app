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
      Authorization: 'Bearer BQAtk0yzGlisXe2k1hB_ht5Vbka6Z66XYtrAlQU7Aojh1tsmJ5P0cweT5meYDXhXYZtK_gp8rUK5KGrihcR9RgZY9sHc5GOWjB_qcOIgX55tD63_f9NTH1qe3gzIVdHSwCVUthzccIRAuihtJrJF8krmBbmL4Et9VK4'
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
