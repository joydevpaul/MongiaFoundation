import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700
   
  };
  galleryData:any=[];
  constructor(private gallery:GalleryService)
  {
    this.gallery.getData().subscribe(result=>{
      console.log(result);
      this.galleryData=result;
    })
  }

  //slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
