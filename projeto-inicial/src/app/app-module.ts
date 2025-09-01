import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Soma } from './contador/soma/soma';
import { ContadorModule } from './contador/contador-module';
import { EstruturaModule } from './estrutura/estrutura-module';
import { Diretiva } from './estrutura/diretiva/diretiva';
import { Estoque } from './produtos/estoque/estoque';
import { SharedModule } from './shared/shared-module';


@NgModule({
  declarations: [
    App,
    Soma,
    Estoque
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    EstruturaModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
