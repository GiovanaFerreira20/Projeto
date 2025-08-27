import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class Soma {
  public valor = 0; // Exemplo de uma propriedade

  // O método 'incrementar' agora existe.
  incrementar() {
    this.valor++;
    console.log('Valor incrementado:', this.valor);
  }
}