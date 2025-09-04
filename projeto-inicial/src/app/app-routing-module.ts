import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soma } from './contador/soma/soma';
import { Diretiva } from './estrutura/diretiva/diretiva';
import { Estoque } from './produtos/estoque/estoque';
import { Inicial } from './cadastrar/inicial/inicial';

const routes: Routes = [
 
  { 
    path: 'diretiva', 
    component: Diretiva 
  },
  { 
    path: 'soma', 
    component: Soma 
  },
  {
    path:'estoque',
    component: Estoque
  },

  {
    path:'inicial',
    component: Inicial
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
