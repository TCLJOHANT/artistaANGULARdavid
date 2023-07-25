import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AgregarArtistaComponent } from './componentes/agregarArtista/agregarArtista.component';
import { LeerArtistaComponent } from './componentes/leer-artista/leer-artista.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AgregarArtistaComponent,
    LeerArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
