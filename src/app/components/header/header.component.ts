import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuData:any=[];
  constructor(private menu:MenuService)
  {
    this.menu.getData().subscribe(result=>{
      console.log(result);
      this.menuData=result;
    })
  }

  ngOnInit(): void {
  }

}
