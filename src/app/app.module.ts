import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AgregarArtistaComponent } from './componentes/agregarArtista/agregarArtista.component';
import { ArtistasComponent } from './componentes/artistas/artistas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArtistaComponent } from './componentes/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AgregarArtistaComponent,
    ArtistaComponent,
    ArtistasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
