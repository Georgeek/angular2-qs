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
  certificateDescription: string;
  tooltipTop: number;
  tooltipLeft: number;


  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

  onMouseEnter(text: string, event: any) {
    this.isShown = true;
    if (text) {
      this.certificateDescription = text;
    } else {
      this.certificateDescription = 'No certificate description';
    }
    // console.log('text ' + this.certificateDescription);
    // console.log('X: ' + event.pageX + '; Y: ' + event.pageY);
    if (event.y < 500) {
      this.tooltipLeft = event.pageX - 30;
      this.tooltipTop = event.pageY + 30;
    } else {
      this.tooltipLeft = event.pageX - 30;
      this.tooltipTop = event.pageY - 250;
    }
  }

  // onMouseLeave() {
  //   this.isShown = false;
  // }

}
