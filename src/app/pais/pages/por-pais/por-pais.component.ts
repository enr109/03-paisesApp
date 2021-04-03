import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private PaisService: PaisService) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.PaisService.buscarPais( this.termino)
      .subscribe( (resp)=>{
        console.log(resp);
        this.paises=resp;
      }, (err) => {
        this.hayError= true;
        this.paises = [];
      });
  }
  

  

}
