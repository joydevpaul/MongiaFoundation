import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statisticsData:any=[];
  constructor(private statistics: StatisticsService)
  {
    this.statistics.getData().subscribe(result=>{
      console.log(result);
      this.statisticsData=result[0];
    })
  }

  slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };

  ngOnInit(): void {
  }

}
