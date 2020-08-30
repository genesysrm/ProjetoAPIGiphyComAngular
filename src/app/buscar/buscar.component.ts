import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../giphy.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private gifServices: GiphyService ) { }

  ngOnInit(): void {
  }

  search(searchterm: string){
    if (searchterm !== '') {
      this.gifServices.searchGifs(searchterm);
      
  }

  }
}