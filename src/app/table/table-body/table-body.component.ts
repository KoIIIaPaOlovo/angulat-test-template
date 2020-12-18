import { Component, OnInit } from '@angular/core';
import { DateFormatterService } from '../../date-formatter.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})



export class TableBodyComponent implements OnInit {

  Arr=Array;
  currentDate: Date;
  daysAmount: number;
  members: Member[];

  constructor(private dateFormat:DateFormatterService) {
    this.currentDate = new Date();
    this.daysAmount = this.dateFormat.getDaysAmount();
    this.members = [{name:'member1'},{name:'member2'},{name:'member3'}]
  }

  getDaysAmount(){
    return this.dateFormat.getDaysAmount();
  }

  getDayName(dayIndex:number):string{
    return this.dateFormat.getDayName(dayIndex);
  }

  ngOnInit() {
  }

}

type Member = {
  name:string,
}
