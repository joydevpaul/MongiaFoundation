import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageData:any=[];
  constructor( private route: ActivatedRoute, private page:PageService) {
    this.page.getData().subscribe(result=>{
      console.log(result);
      this.pageData=result;
    })

  }

  slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
