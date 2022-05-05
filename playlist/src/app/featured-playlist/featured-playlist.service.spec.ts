import { TestBed } from '@angular/core/testing';

import { FeaturedPlaylistService } from './featured-playlist.service';

describe('FeaturedPlaylistService', () => {
  let service: FeaturedPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
