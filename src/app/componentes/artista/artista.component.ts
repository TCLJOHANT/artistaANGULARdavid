import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Artista } from 'src/app/models/artista.model';
import { ArtistaService } from 'src/app/servicios/artista.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  //Create (crear)
  artistas:Artista[] = []
      id:number = 0;
      nombre:String =''
      genero:string = '';
      descripcion = '';
      created_at = new Date()
  agregar(){
    let artista:Artista;
     artista =  {
       id : this.id,
       nombre: this.nombre,
       genero: this.genero,
       descripcion:this.descripcion,
       created_at:this.created_at
     }
      this.artistaService.agregarArtista(artista);
      // alert(JSON.stringify(artista))
}
  //Read (leer)
  constructor(private artistaService: ArtistaService) {
    this.artistaService.conseguirArtista().subscribe(data => {
      this.artistas = data;
    });
  }
  //Edit (editar)
  editarArtista(artistaID:number){
    this.artistaService.editarArtista(artistaID);
  }
  //Delete (eliminar)
  eliminarArtista(artistaID:number){
     this.artistaService.eliminarArtista(artistaID);
  }

  //muestreo y salida del formulario
  mostrarFormulario:boolean = false
  mostrarForm(){
    this.mostrarFormulario = true}
  salirForm(){this.mostrarFormulario = false}
}

