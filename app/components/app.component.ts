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
  isShown = false;
  certificateDescription: string;
  tooltipLeft: number;
  tooltipTop: number;

  public show:any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(data => {
      this.pricelist = data.pricelist;
    });
  }

    clicked(index: any, event: any) { 
      if (index.description) {
        // console.log(index.description);
        this.show = index;
      } else {
        console.log("No certificate description found");
        this.show = !index;
      }

      this.tooltipLeft = event.pageX - 30;
      if (event.y < 700) {
        this.tooltipTop = event.pageY + 19;
        console.log("under div element:" + this.tooltipTop, event.y);
      } else {
        this.tooltipTop = event.pageY - 200;
        console.log("above div element:" + this.tooltipTop, event.y);
      }
    }

  onMouseLeave(index: any) {
    this.show = !index;
  }



}
