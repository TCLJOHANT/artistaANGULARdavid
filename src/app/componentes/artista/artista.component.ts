import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Artista } from 'src/app/models/artista.model';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  @Input() artista:Artista;
  //evento de salida
  // comunicacion el componente artista con Artistas, permitiendo
  //emitir evento personalizado y pueda ser capturado  por su  padre.
  @Output() eliminarArtista:EventEmitter <Artista> = new EventEmitter();
  @Output() editarArtista:EventEmitter <Artista> = new EventEmitter();
  constructor(){
    this.artista = 
     {
      id : 0,
      nombre:'',
      genero:'',
      descripcion:'',
      fechaCreacion:new Date(),
     }
  } 
  pasarObjetoApadre(artista:Artista){
    //emite este objeto al elemento padre en este caso a Celulares
    this.eliminarArtista.emit(artista),
    this.editarArtista.emit(artista);
  }
  

}
