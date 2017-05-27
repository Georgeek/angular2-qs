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
  templateUrl: './app/components/app.component.html',
  styleUrls: ['./app/components/app.component.css']
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {    
  }

  pricelist: any;
  isShown = true;
  certificateDescription = 'Default certificate description';


  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

  sayHi(text: string, event: any) {
    this.isShown = true;
    this.certificateDescription = text;
    // this.isShown = !this.isShown; это потребуется для mouseover mouseleave
    // console.log('text ' + this.certificateDescription + event);
    // Если больше 600, то сверху, если меньше 600, то снизу
    console.log('X: ' + event.x + '; Y: ' + event.y);
  }

}
