import { createAction, props } from '@ngrx/store';
import { FeaturedPlaylists } from '../featured-playlist';

export const getPlaylist = createAction('[Featured Playlist] GET_PLAYLIST'); 
export const setPlaylist = createAction('[Featured Playlist] SET_PLAYLIST', props<{ playlist: FeaturedPlaylists }>()); 