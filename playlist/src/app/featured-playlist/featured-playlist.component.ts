import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeaturedPlaylists } from './featured-playlist.model';
import { FeaturedPlaylistService } from './featured-playlist.service';

@Component({
  selector: 'app-featured-playlist',
  templateUrl: './featured-playlist.component.html',
  styleUrls: ['./featured-playlist.component.scss'],
})
export class FeaturedPlaylistComponent implements OnInit {

  playlist$!: Observable<FeaturedPlaylists>;

  constructor(private store: Store<any>,
    private featuredPlaylistService: FeaturedPlaylistService) {
  }

  ngOnInit(): void {
    this.playlist$ = this.featuredPlaylistService.getPlaylist()
    // this.store.dispatch(getPlaylist())
  }
}
