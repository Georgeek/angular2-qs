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
  tooltipLeft: number;
  tooltipTop: number;
  arrowBottom: any;
  public show:any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

  clicked(index: any, event: any) { 
    if (index.description) {
      this.show = index;
    } else {
      console.log("No certificate description found");
      this.show = !index;
    }

    this.tooltipLeft = event.pageX - 50;
    if (event.y < 700) {
      this.tooltipTop = event.pageY + 40;
      this.arrowBottom = true;        
    } else {
      this.tooltipTop = event.pageY - 210;
      this.arrowBottom = false;
    }
  }

  onMouseLeave(index: any) {
    this.show = !index;
  }
}
