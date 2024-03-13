import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Album, Albums_detail } from '../module';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  updatedAlbum!: Album;
  loaded: boolean = false;
  isUpdating: boolean = false;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.updatedAlbum = { id: 0, userId: 0, title: '' };
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const AlbumsID: number = Number(params.get('id'));
      this.albumService.getAlbums1Id(AlbumsID).subscribe((album:Albums_detail) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }
 

  updateAlbum() {
    this.isUpdating = true;
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'));
      this.albumService.updateAlbum(albumId, this.updatedAlbum).subscribe((updatedAlbum) => {
        this.album = updatedAlbum;
        this.isUpdating = false;
        this.updatedAlbum.title = ''; 
      });
    });
  }
}
