import { Component } from '@angular/core';
import { Artista } from 'src/app/models/artista.model';
import { ArtistaService } from 'src/app/servicios/artista.service';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {

  artistas:Artista[] = []
  //Read (leer)
  constructor(private artistaService: ArtistaService) {
    this.artistaService.conseguirArtista().subscribe(data => {
      this.artistas = data;
    });
  }
  //Edit (editar)
  editarArtista(artista:Artista){
    this.artistaService.editarArtista(artista.id);
  }
  //Delete (eliminar)
  eliminarArtista(artista:Artista){
     this.artistaService.eliminarArtista(artista.id);
  }

}
