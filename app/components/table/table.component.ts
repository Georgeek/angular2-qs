import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// import table.model  constructor

@Component({
  selector: '[app-table]',
  templateUrl: './app/components/table/table.component.html',
  styleUrls: ['./app/components/table/table.component.css']
})

export class TableComponent {
  @Input() certificate: any; // pass Table.model constructor

  tooltipLeft: number;
  tooltipTop: number;
  arrowBottom: boolean;
  show: boolean = false;

  clicked(index: any, event: any) {
    this.show = true;
    this.tooltipLeft = event.pageX - 35;

    event.y < 500 ? (this.tooltipTop = event.pageY + 25,
                    this.arrowBottom = true)
                    :
                    (this.tooltipTop = event.pageY - 25,
                    this.arrowBottom = false);
  }

  onMouseLeave(index: any) {
    this.show = false;
  }
} 
