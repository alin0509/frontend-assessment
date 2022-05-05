import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedPlaylistComponent } from './featured-playlist.component';
import { FeaturedPlaylistItemComponent } from './featured-playlist-item';

@NgModule({
  declarations: [
    FeaturedPlaylistComponent,
    FeaturedPlaylistItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class FeaturedPlaylistModule { }
