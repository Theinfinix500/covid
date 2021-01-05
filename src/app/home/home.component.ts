import { Component, OnInit } from '@angular/core';
import {HomeService} from '../service/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }
  totalData;
  ngOnInit() {

    this.homeService.getData().then(data => {
          this.totalData = data ;
    });
  }

}
