import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component:AboutComponent, title:'about'},
    {path: 'albums', component:AlbumsComponent, title:'albums'},
    {path: 'albums/:id', component: AlbumDetailComponent, title: 'Albums-detail'},
    {path: 'albums/:albumId/photos', component:AlbumPhotosComponent, title: 'Album Photos'},
    {path: '**', component: NotFoundComponent, title: 'not-found' }
];
