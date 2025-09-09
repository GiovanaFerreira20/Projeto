import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabela } from './tabela/tabela';
import { MatRow, MatTableModule } from "@angular/material/table";



@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    MatRow,
    MatTableModule
],
  exports:[
    Tabela
  ]
})
export class DadosModule { }
