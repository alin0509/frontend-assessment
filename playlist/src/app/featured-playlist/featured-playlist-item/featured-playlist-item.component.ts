import { Component, Input } from '@angular/core';
import { PlaylistItem } from '../featured-playlist.model';

@Component({
  selector: 'app-featured-playlist-item',
  templateUrl: './featured-playlist-item.component.html',
  styleUrls: ['./featured-playlist-item.component.scss']
})
export class FeaturedPlaylistItemComponent {
  @Input() item!: PlaylistItem
}
