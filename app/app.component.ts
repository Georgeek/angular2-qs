import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

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
