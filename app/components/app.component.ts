import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
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
  templateUrl: './app/components/app.component.html'
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {
    this.sayHi = this.sayHi.bind(this);
    
  }


  pricelist: any;
  event: boolean;
  isShown: boolean;
  items: any;
  id: string;


  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

  sayHi(id) {
    console.log('clicked: ' + id);
    this.isShown = !this.isShown;
    // this.event = !this.event;
    // this.isShown = !this.isShown;
    // id: this.id ? !this.id;
  }

}
