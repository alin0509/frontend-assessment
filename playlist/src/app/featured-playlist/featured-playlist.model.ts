export interface FeaturedPlaylists {
    name: string;
    content: PlaylistItem[];
}

export interface PlaylistItem {
    id: string;
    kind: string;
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
}
