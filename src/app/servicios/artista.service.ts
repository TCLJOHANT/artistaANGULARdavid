import { Injectable } from '@angular/core';
import { Artista } from '../models/artista.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  urlApi:string ='http://localhost/apiArtistaPhpPuro/index.php'
  //se está inyectando una instancia de  HttpClient  en la clase
  // actual para poder utilizarla en otros métodos y realizar operaciones HTTP.
  constructor(private http: HttpClient) { } 

  agregarArtista(artista:Artista){
    alert(JSON.stringify(artista))
    return this.http.post<Artista[]>(this.urlApi,artista).subscribe(response => {
      console.log(response); // Aquí puedes manejar la respuesta del servidor
    });

  }
  conseguirArtista(){
    return this.http.get<Artista[]>(this.urlApi);
  }
  eliminarArtista(idArtista:number){
    let u =`${this.urlApi}?id=${idArtista}`
    alert(u)
    return this.http.delete<Artista[]>(`${this.urlApi}?id=${idArtista}`).subscribe(response => {
      console.log(response); // Aquí puedes manejar la respuesta del servidor
    });
  }
  
  editarArtista(idArtista:number){
    alert(idArtista)
    return this.http.get<Artista[]>(`${this.urlApi}?id=${idArtista}`).subscribe(response => {
      console.log(response); // Aquí puedes manejar la respuesta del servidor
    });
  }
}
