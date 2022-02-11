import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.css']
})

export class HomePresentationComponent implements OnInit {
  bounce = 0;
  bounceEpice = 0;
  fav_like = ['favorite_border', 'favorite_border', 'favorite_border', 'favorite'];
  epice_like = ['favorite_border', 'favorite_border', 'favorite_border', 'favorite'];

  constructor() { }

  ngOnInit(): void {

  }

  onWindowScroll($event: any){
    console.log("Scroll");
    this.bounce=1;
  }

  onWindowScrollepice($event: any){
    console.log("Scroll");
    this.bounceEpice=1;
  }

  click_fav(order:string){
    if(order=='one'){
      if(this.fav_like[0]=='favorite_border'){
        this.fav_like[0]='favorite';
      }else{
        this.fav_like[0]='favorite_border';
      } 
    }
    else if(order=='two'){
      if(this.fav_like[1]=='favorite_border'){
        this.fav_like[1]='favorite';
      }else{
        this.fav_like[1]='favorite_border';
      } 
    }
    else if(order=='three'){
      if(this.fav_like[2]=='favorite_border'){
        this.fav_like[2]='favorite';
      }else{
        this.fav_like[2]='favorite_border';
      } 
    }
    else if(order=='four'){
      if(this.fav_like[3]=='favorite_border'){
        this.fav_like[3]='favorite';
      }else{
        this.fav_like[3]='favorite_border';
      } 
    }
  }

  click_epice(order:string){
    if(order=='one'){
      if(this.epice_like[0]=='favorite_border'){
        this.epice_like[0]='favorite';
      }else{
        this.epice_like[0]='favorite_border';
      } 
    }
    else if(order=='two'){
      if(this.epice_like[1]=='favorite_border'){
        this.epice_like[1]='favorite';
      }else{
        this.epice_like[1]='favorite_border';
      } 
    }
    else if(order=='three'){
      if(this.epice_like[2]=='favorite_border'){
        this.epice_like[2]='favorite';
      }else{
        this.epice_like[2]='favorite_border';
      } 
    }
    else if(order=='four'){
      if(this.epice_like[3]=='favorite_border'){
        this.epice_like[3]='favorite';
      }else{
        this.epice_like[3]='favorite_border';
      } 
    }
  }

}
