import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {
  currentDate:Date;
  monthName: string;
  daysAmount: number;
  constructor() {
    this.currentDate = new Date();
    this.monthName = this.getMonth(this.currentDate);
    this.daysAmount = this.getDaysAmount();
 }



 getMonth(date: Date):string{
  switch (date.getMonth()) {
    case 0:
      return "January"
      break;
    case 1:
      return "February"
      break;
    case 2:
      return "March"
      break;
    case 3:
      return "April"
      break;
    case 4:
      return "May"
      break;
    case 11:
      return "December"
      break;

    default:
      return "Invalid Month"
      break;
  }
 }

 getDayName(dayIndex:number):string{
  let tempDate:number = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),dayIndex).getDay();
  switch (tempDate) {
    case 0:
      return "St"
      break;
    case 1:
      return "Mn"
      break;
    case 2:
      return "Tu"
      break;
    case 3:
      return "Wd"
      break;
    case 4:
      return "Th"
      break;
    case 5:
      return "Fr"
      break;
    case 6:
      return "Sn"
      break;
    default:
      return "ERR"
      break;
  }
 }


 getDaysAmount(){
  return new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDate();
 }

 changeMonth(direction:string):Date{
  if (direction == "next"){
    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1);
  }
  if (direction == "prev"){
    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1);
  }
  return this.currentDate;
 }




}
