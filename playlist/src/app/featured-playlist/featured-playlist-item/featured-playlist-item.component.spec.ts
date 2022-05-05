import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlaylistItemComponent } from './featured-playlist-item.component';

describe('FeaturedPlaylistItemComponent', () => {
  let component: FeaturedPlaylistItemComponent;
  let fixture: ComponentFixture<FeaturedPlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPlaylistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
