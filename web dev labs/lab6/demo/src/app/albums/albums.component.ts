import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../module';
// import { ALBUMS } from '../DB';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  Albums!: Album[];
  loaded!: boolean;

  newAlbums: Album;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute){
    this.newAlbums = {
      userId:1,
      id: 101,
      title: '',  
    };
  }

  ngOnInit(): void {
      this.getAlbumsID();
  }

  getAlbumsID(): void {
      this.loaded = false
      this.albumsService.getAlbums1().subscribe((albums: Album[]): void =>{
        this.Albums = albums
        this.loaded = true;
    });
  }

  deleteBut(id: number): void {
    this.Albums = this.Albums.filter((a:Album)=>a.id !== id);
    this.albumsService.deleteAlbums(id).subscribe({
      next: () => {
        console.log('delete');
      }
    });
  }

  AddAlbums():void{
    this.albumsService.addAlbums(this.newAlbums).subscribe({
      next: ()=>{
        this.Albums.push(album);
      }
    })
  }

}
