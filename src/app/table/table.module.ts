import { CommonModule } from '@angular/common';
import { TableHeadComponent } from './table-head/table-head.component';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableBodyComponent } from './table-body/table-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TableHeadComponent, TableBodyComponent],
  exports: [TableComponent, TableHeadComponent, TableBodyComponent]
})

export class TableModule { }
