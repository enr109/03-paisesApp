import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
   button {
     margin-right: 5px;
   }
  `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia','europe','oceania'];
  regionActiva: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[]=[];


  constructor( private PaisService: PaisService) { }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }


  activarRegion( region: string ){

    if ( region === this.regionActiva ) {return;}
    this.regionActiva = region;
    this.paises=[];
    this.PaisService.buscarRegion( region )
    .subscribe( paises => this.paises = paises);
  }


  /*buscar( termino: string){
    this.hayError = false;
    this.termino= termino;

    this.PaisService.buscarRegion( this.termino )
    .subscribe( (resp)=>{
      console.log(resp);
      this.paises=resp;
    }, (err) => {
      this.hayError=true;
      this.paises=[];
    } )
    
  }*/


  

  

}
