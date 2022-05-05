import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FeaturedPlaylists, FeaturedPlaylistService } from '../featured-playlist';
import { getPlaylist, setPlaylist } from './featured-playlist.actions';

@Injectable()
export class FeaturePlaylistEffects {

    constructor(
        private actions$: Actions,
        private featuredPlaylistService: FeaturedPlaylistService) { }

    getPlaylist$ = createEffect(() => this.actions$.pipe(
        ofType(getPlaylist),
        switchMap(() =>
            this.featuredPlaylistService.getPlaylist().pipe(
                tap((data) => console.log('wwwww', data)),
                switchMap((playlist: FeaturedPlaylists) => [
                    setPlaylist({  playlist })
                ]),
            )
        )
    )
    );
} 
