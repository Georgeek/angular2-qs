import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {}

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

  onHover() {
    console.log('item.description_ru');
  }


}
