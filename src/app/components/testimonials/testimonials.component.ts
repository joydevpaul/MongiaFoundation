import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialsData:any=[];
  constructor(private testimonials:TestimonialsService)
  {
    this.testimonials.getData().subscribe(result=>{
      console.log(result);
      this.testimonialsData=result[0];
    })
  }

  slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
