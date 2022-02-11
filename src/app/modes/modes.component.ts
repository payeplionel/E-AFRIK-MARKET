import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {

  bounce = 0;
  fav_like = ['favorite_border', 'favorite_border', 'favorite_border', 'favorite','favorite','favorite_border','favorite_border'];

  onWindowScroll($event: any){
    console.log("Scroll");
    this.bounce=1;
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
    else if(order=='five'){
      if(this.fav_like[4]=='favorite_border'){
        this.fav_like[4]='favorite';
      }else{
        this.fav_like[4]='favorite_border';
      } 
    }
    else if(order=='six'){
      if(this.fav_like[5]=='favorite_border'){
        this.fav_like[5]='favorite';
      }else{
        this.fav_like[5]='favorite_border';
      } 
    }
    else if(order=='seven'){
      if(this.fav_like[6]=='favorite_border'){
        this.fav_like[6]='favorite';
      }else{
        this.fav_like[6]='favorite_border';
      } 
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
