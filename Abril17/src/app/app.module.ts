import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FundamentostsComponent } from './fundamentosts/fundamentosts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { PadreMedicoComponent } from './padre-medico/padre-medico.component';
import { HijoMedicoComponent } from './hijo-medico/hijo-medico.component';
import { PadrePacienteComponent } from './padre-paciente/padre-paciente.component';
import { HijoPacienteComponent } from './hijo-paciente/hijo-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentostsComponent,
    DirectivasComponent,
    PadreMedicoComponent,
    HijoMedicoComponent,
    PadrePacienteComponent,
    HijoPacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
