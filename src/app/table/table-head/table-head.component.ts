import { Component, OnInit } from '@angular/core';
import { DateFormatterService } from '../../date-formatter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  Arr=Array;
  currentDate: Date;
  daysAmount: number;
  constructor(private dateFormat:DateFormatterService) {
    this.currentDate = new Date();
    this.daysAmount = this.dateFormat.getDaysAmount();
  }

  changeDate(){

  }



  getDayName(dayIndex:number):string{
    return this.dateFormat.getDayName(dayIndex);
  }

  getDaysAmount(){
    return this.dateFormat.getDaysAmount();
  }

  ngOnInit() {
  }

  ngOnDestroy():void{
  }

}
