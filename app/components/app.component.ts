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
  arrowTop: any;
  arrowBottom: any;

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

      this.tooltipLeft = event.pageX - 50;
      if (event.y < 700) {
        this.tooltipTop = event.pageY + 40;
        console.log("under div element:" + this.tooltipTop, event.y);
        this.arrowBottom = true;
        console.log(this.arrowBottom);

        
      } else {
        this.tooltipTop = event.pageY - 210;
        console.log("above div element:" + this.tooltipTop, event.y);
        event.target.classList.add('description__tooltip--bottom'); // To ADD
        event.target.classList.remove('description__tooltip--top'); // remove
        this.arrowBottom = false;
        console.log(this.arrowBottom);
      }
    }

  onMouseLeave(index: any) {
    this.show = !index;
  }



}
