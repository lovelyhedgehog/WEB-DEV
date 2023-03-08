import { Component, OnInit } from '@angular/core';
import { Photos } from '../models';
import { ALBUMPHOTOS } from '../db';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums-photos',
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumsPhotosComponent implements OnInit {
  photos: Photos[];
  newPhoto: Photos;
  loaded: boolean;

  constructor(private albumService: AlbumsService) {
    this.photos = [];
    this.newPhoto = {} as Photos;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.loaded = false;
    this.albumService.getPhotos().subscribe((photos) =>{
      this.photos = photos;
      this.loaded = true;
    })
  }

  addPhoto(){
    this.loaded = false;
    this.albumService.addPhoto(this.newPhoto).subscribe((photo) => {
      this.photos.push(photo);
      this.photos.unshift(photo);
      this.loaded = true;
      this.newPhoto = {} as Photos;
    });
  }

  deletePhoto(id: number): void {
    // @ts-ignore
    this.photos = this.photos.filter((x) => x.id !== id);
    this.albumService.deletePhoto(id).subscribe(() => {
      console.log('deleted', id);
    });
  }


}
