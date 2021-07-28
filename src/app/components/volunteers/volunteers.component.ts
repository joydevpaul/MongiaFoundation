import { Component, OnInit } from '@angular/core';
import { VolunteersService } from '../../services/volunteers.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  volunteersData:any=[];
  constructor(private volunteers:VolunteersService)
  {
    this.volunteers.getData().subscribe(result=>{
      console.log(result);
      this.volunteersData=result;
    })
  }

  slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
