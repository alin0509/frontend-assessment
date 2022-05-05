import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FeaturedPlaylists } from './featured-playlist.model';

@Injectable()
export class FeaturedPlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylist(): Observable<FeaturedPlaylists> {
    const url = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';
    return this.http.get<FeaturedPlaylists>(url).pipe(
      map((playlist: any) => playlist.featuredPlaylists)
    );
  }
}
