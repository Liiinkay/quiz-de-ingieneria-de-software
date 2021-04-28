import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Dias,ListaDias} from '../../interfaces/dias';

@Component({
  selector: 'app-cambiar-clima',
  templateUrl: './cambiar-clima.component.html',
  styleUrls: ['./cambiar-clima.component.scss']
})
export class CambiarClimaComponent implements OnInit {

  formulario:FormGroup;
  grados:any;
  region:any;
  estado:any;
  temperatura:any;
  dia:any;
  lista=ListaDias;

  constructor(public fb:FormBuilder) {
    this.formulario=fb.group({
      grados:[''],
      estado:[''],
      region:[''],
      temperatura:[''],
      dia:['']
    })
   }

  ngOnInit(): void {
    this.grados=this.formulario.get("grados") as FormGroup;
    this.region=this.formulario.get("region") as FormGroup;
    this.estado=this.formulario.get("estado") as FormGroup;
    this.temperatura=this.formulario.get("temperatura") as FormGroup;
    this.dia=this.formulario.get("dia") as FormGroup;
  }

  Cambiar(){
    console.log(this.region.value);
    console.log(this.estado.value);
    console.log(this.dia.value);
    console.log(this.temperatura.value);
    console.log(this.grados.value);
  }
}
