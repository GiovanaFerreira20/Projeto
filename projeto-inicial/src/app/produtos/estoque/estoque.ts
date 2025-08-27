import { Component } from '@angular/core';

interface Produto{
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}


@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

  public produtos: Produto[] = [
  {id: 1, nome: 'Notebook', preco: 3500, estoque: 5},
  {id: 2, nome: 'Teclado', preco: 150, estoque: 0},
  {id: 3, nome: 'Monitor', preco: 1200, estoque: 3}
];

  constructor(){ }

  ngOnInit(): void {

  }

  aumentarPrecos(){
    this.produtos.forEach(produto => produto.preco *= 1.10 );
  }

  diminuirPrecos(){
    this.produtos.forEach(produto => produto.preco *= 0.90 );
  }

}


