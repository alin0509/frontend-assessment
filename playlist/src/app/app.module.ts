import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedPlaylistModule } from './featured-playlist/index';
import { StoreModule } from '@ngrx/store';
import { FeaturePlaylistEffects } from './ngrx/feature-playlist.effects';
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturedPlaylistModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([
      FeaturePlaylistEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
