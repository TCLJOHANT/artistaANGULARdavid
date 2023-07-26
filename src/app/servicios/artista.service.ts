import { Injectable } from '@angular/core';
import { Artista } from '../models/artista.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// const cors = require('cors');


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  urlApi:string ='http://localhost/apiPHP/'
  //se está inyectando una instancia de  HttpClient  en la clase
  // actual para poder utilizarla en otros métodos y realizar operaciones HTTP.
  constructor(private http: HttpClient) { } 

  agregarArtista(artista:Artista){
    alert(JSON.stringify(artista))
    return this.http.post<Artista[]>(`${this.urlApi}metodos/crear.php`,JSON.stringify(artista)).subscribe(response => {
      console.log(response); 
    });

  }
  conseguirArtista(){
    return this.http.get<Artista[]>(`${this.urlApi}metodos/leer.php`);
  }

  eliminarArtista(idArtista:number){
    alert(idArtista)
    let u =`${this.urlApi}?id=${idArtista}`
    alert(u)
    return this.http.delete<Artista[]>(`${this.urlApi}metodos/eliminar.php?id=${idArtista}`).subscribe(response => {
      console.log(response); 
    });
  }
  
  editarArtista(idArtista:number){
    alert(idArtista)
    let u =`${this.urlApi}?id=${idArtista}`
    alert(u)
    return this.http.get<Artista[]>(`${this.urlApi}metodos/actualizar.php?id=${idArtista}`).subscribe(response => {
      console.log(response); 
    });
  }
}
