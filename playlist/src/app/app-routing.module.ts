import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPlaylistComponent } from './featured-playlist';

const routes: Routes = [
  { path: '', redirectTo: 'playlist', pathMatch: "full" },
  { path: 'playlist', component: FeaturedPlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
