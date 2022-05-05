import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPlaylistComponent } from './featured-playlist.component';
import { FeaturedPlaylistItemComponent } from './featured-playlist-item/featured-playlist-item.component';



@NgModule({
  declarations: [FeaturedPlaylistComponent, FeaturedPlaylistItemComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturedPlaylistModule { }
