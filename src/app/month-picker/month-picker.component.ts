import { DateFormatterService } from './../date-formatter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss']
})
export class MonthPickerComponent implements OnInit {
  currentDate: Date;
  monthName: string;
  constructor(private dateFormat:DateFormatterService) {
    this.currentDate = this.dateFormat.currentDate;
    this.monthName = this.dateFormat.monthName;
   }

  ngOnInit() {
    console.log("MonthPickerComponent initiated");
  }



  changeMonth(direction:string){
    this.currentDate = this.dateFormat.changeMonth(direction);
    this.changeMonthOutput();
  }

  changeMonthOutput(){
    this.monthName = this.dateFormat.getMonth(this.currentDate);
  }


}
