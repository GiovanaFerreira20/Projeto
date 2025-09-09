import { Component } from '@angular/core';

export interface UserData{
  nome: string;
  idade: number;
  titulo: string;
}

const ELEMENT_DATA: UserData[] = [
  {nome: 'João', idade: 28, titulo: 'Desenvolvedor'},
  {nome: 'Maria', idade: 34, titulo: 'Gerente de Produto'},
  {nome: 'Pedro', idade: 45, titulo: 'Arquiteto de Software'}
];

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  dataSource = ELEMENT_DATA;
}
