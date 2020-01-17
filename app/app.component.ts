import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  handleSearch(value: string){
    
    this.filtro_valor = value;

  }

public filtro_valor:string;
public url: string;
public pokemons:any;
public nombrePokemon:string;
public lista:any;
public total:any;
public type:any;

  constructor(
    private _http: HttpClient
  ){ 
    this.url = "https://pokeapi.co/api/v2/pokemon/";
   }
  
 getPokemon(filtro_valor): Observable<any>{
    return this._http.get(this.url+filtro_valor);

  }
  cargaUsuario(){
    if (this.filtro_valor) {
      this.getPokemon(this.filtro_valor).subscribe(
        result =>{
           console.log(<any>result); 
          this.pokemons = <any>result;
          this.total = 0;
          for (let canditad of this.pokemons.stats) {
            this.total += canditad.base_stat;
           
        }
        
        
       
        },
        error => {
          console.log(<any>error)
        }
        
        );
   
        
    }
   
  } 
 

 
  ngOnInit(){
  this.cargaUsuario();
  
    
  }

}
