import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreFormularioProductoComponent } from './padre-formulario-producto/padre-formulario-producto.component';
import { HijoListaProductosComponent } from './hijo-lista-productos/hijo-lista-productos.component';
import { FormsModule } from '@angular/forms';
import { PadreListaPedidosComponent } from './padre-lista-pedidos/padre-lista-pedidos.component';
import { HijoFormularioPedidosComponent } from './hijo-formulario-pedidos/hijo-formulario-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreFormularioProductoComponent,
    HijoListaProductosComponent,
    PadreListaPedidosComponent,
    HijoFormularioPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
