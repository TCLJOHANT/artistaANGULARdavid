import { Component,Output,EventEmitter,Input } from '@angular/core';
// import { Artista } from 'src/app/models/artista.model';
import { Artista } from '../../models/artista.model';
import { ArtistaService } from 'src/app/servicios/artista.service';

@Component({
  selector: 'app-agregarArtista',
  templateUrl: './agregarArtista.component.html',
  styleUrls: ['./agregarArtista.component.css']
})
export class AgregarArtistaComponent {
  @Input() mostrarFormulario:boolean = true;
  //evento de salida
  // comunicacion el componente artista con Artistas, permitiendo
  //emitir evento personalizado y pueda ser capturado  por su  padre.
  @Output() mostrarForm:EventEmitter <boolean> = new EventEmitter();

  id:number = 0;
  nombre:String =''
  genero:string = '';
  descripcion = '';
  fechaCreacion = new Date()
  
  constructor(private artistaService:ArtistaService){
  } 
  agregar(){
    let artista:Artista;
     artista = 
      {
       id : this.id,
       nombre: this.nombre,
       genero: this.genero,
       descripcion:this.descripcion,
       fechaCreacion:this.fechaCreacion
     }
      this.artistaService.agregarArtista(artista);
      // alert(JSON.stringify(artista))
}
pasarvar(){
  this.mostrarForm.emit(this.mostrarFormulario)
}
salirDeForm(){
  this.mostrarFormulario =false;
}
}