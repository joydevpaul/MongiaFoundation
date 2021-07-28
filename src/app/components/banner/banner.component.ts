import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // constructor() { }
  bannerData:any=[];
  constructor(private banner:BannerService)
  {
    this.banner.getData().subscribe(result=>{
      console.log(result);
      this.bannerData=result;
    })
  }

  slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
