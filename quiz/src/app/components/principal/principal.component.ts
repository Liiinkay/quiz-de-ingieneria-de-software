import { Component, OnInit } from '@angular/core';
import {Dias,ListaDias} from '../../interfaces/dias';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  Lista=ListaDias;
  constructor() { }

  ngOnInit(): void {
  }

}
