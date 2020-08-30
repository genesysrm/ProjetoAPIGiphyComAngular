import { Component, OnInit, OnDestroy } from '@angular/core';
import {GiphyService} from '../giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit, OnDestroy {

  gifs: any [] = [];
  subscrption: Subscription;
  tem_gif: boolean = false;

  constructor(private gifServices: GiphyService) { 
    this.tem_gif=false;
  }

  ngOnInit(): void {
    this.gifServices.getTrendingGifs();
    
   
    }

    

    search(searchterm: string){
      if (searchterm !== '') {
        this.gifServices.searchGifs(searchterm);
        this.subscrption = this.gifServices.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
      this.tem_gif=true;
    });
        
    }
  

    
    }

ngOnDestroy(){
  this.subscrption.unsubscribe();
}


Limpar(){
  this.tem_gif=false;
}
  }


