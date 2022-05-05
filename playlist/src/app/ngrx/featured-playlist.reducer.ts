import { createReducer, on } from '@ngrx/store';
import { FeaturedPlaylists } from '../featured-playlist';
import { setPlaylist } from './featured-playlist.actions';

export interface State {
    playlist?: FeaturedPlaylists;
}

export const initialState = { playlist: {} };

export const playlistReducer = createReducer(
    initialState,
    on(setPlaylist, (state: any, payload) => {
        console.log('sssssss', state, payload)
        return { ...state, playlist: payload.playlist }
    }
    ),
);