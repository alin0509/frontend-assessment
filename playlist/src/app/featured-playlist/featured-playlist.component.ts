import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FeaturedPlaylists } from './featured-playlist.model';
import { FeaturedPlaylistService } from './featured-playlist.service';

@Component({
  selector: 'app-featured-playlist',
  templateUrl: './featured-playlist.component.html',
  styleUrls: ['./featured-playlist.component.scss'],
  providers: [FeaturedPlaylistService] // provided in here no need to be provided in root
})
export class FeaturedPlaylistComponent implements OnInit {

  playlist$!: Observable<FeaturedPlaylists>

  constructor(private featuredPlaylistService: FeaturedPlaylistService) {

  }

  ngOnInit(): void {
    this.playlist$ = this.featuredPlaylistService.getPlaylist()
      .pipe(tap(res => console.log(res)));
  }
}
