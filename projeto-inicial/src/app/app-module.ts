import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Soma } from './contador/soma/soma';
import { ContadorModule } from './contador/contador-module';
import { EstruturaModule } from './estrutura/estrutura-module';
import { Estoque } from './produtos/estoque/estoque';
import { SharedModule } from './shared/shared-module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Inicial } from './cadastrar/inicial/inicial';
import {MatTableModule} from '@angular/material/table';
import { DadosModule } from './dados/dados-module';

@NgModule({
  declarations: [
    App,
    Soma,
    Estoque,
    Inicial
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    EstruturaModule,
    SharedModule,
    MatToolbarModule,
    MatTableModule,
    DadosModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
