import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Router } from 'express';
import { Album, Albums_detail } from '../module';
import { ALBUMS } from '../Detail_DB';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
  

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //     this.route.paramMap.subscribe((params: ParamMap): void=>{
  //       // console.log( params.get('id'));

  //       const AlbumsID: number = Number(params.get('id'));
  //       this.album = ALBUMS.find((album: Albums_detail) => album.id === AlbumsID) as Albums_detail;
  //     })
  // }

export class AlbumDetailComponent implements OnInit {
    album!: Albums_detail ;
    loaded: boolean = false;
  
    constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const AlbumsID: number = Number(params.get('id'));
        this.albumsService.getAlbums1Id(AlbumsID).subscribe((album: Albums_detail) => {
          this.album = album;
          this.loaded = true;
        });
      });
    }
}
