import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppService } from './app.service';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app/components/app.component.html',
  styleUrls: ['./app/components/app.component.css']
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {    
  }

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }
}
