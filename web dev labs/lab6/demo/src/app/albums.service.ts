import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums_detail, Photo } from './module';
import { Album } from './module';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { 
  }

  getAlbums(): Observable<Albums_detail[]> {
    return this.client.get<Albums_detail[]>('https://jsonplaceholder.typicode.com/Posts/');
  }

  getAlbums1(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums/');
  }

  getAlbums1Id(id: number): Observable<Albums_detail> {
    return this.client.get<Albums_detail>(`https://jsonplaceholder.typicode.com/albums/${id}/`);
  }

  addAlbums(newAlbum: Album): Observable<Album> {
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums/', newAlbum);
  }

  deleteAlbums(id: number): Observable<any> {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  updateAlbum(id: number, updatedAlbum: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedAlbum);
  }
}
