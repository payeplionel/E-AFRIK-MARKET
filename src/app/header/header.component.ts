import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profil = 0;
  fav = 0;
  panier = 0;
  choose = "Plats";
  temp="";
  choose_left = "Modes";
  choose_right = "Textiles";
  Total = 1000;

  name="DOE";
  surname="John"

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  showAccountProfil(){
    if(this.profil==0){
      this.profil=1;
      this.fav=0;
      this.panier=0;
    }else{
      this.profil=0;
    }
  }

  showFavourite(){
    if(this.fav==0){
      this.fav=1;
      this.profil=0;
      this.panier=0;
    }else{
      this.fav=0;
    }
  }

  showPanier(){
    if(this.panier==0){
      this.panier=1;
      this.fav=0;
      this.profil=0;
    }else{
      this.panier=0;
    }
  }

  c_left(){
    this.temp = this.choose;
    this.choose=this.choose_left;
    this.choose_left=this.temp;
    if(this.choose=="Plats"){
      this.route.navigate(['/plats']);
    }else if(this.choose=="Modes"){
      this.route.navigate(['/modes']);
    }else{
      this.route.navigate(['/plats']);
    }
  }

  c_right(){
    this.temp = this.choose;
    this.choose=this.choose_right;
    this.choose_right=this.temp;
    if(this.choose=="Plats"){
      this.route.navigate(['/plats']);
    }else if(this.choose=="Modes"){
      this.route.navigate(['/modes']);
    }else{
      this.route.navigate(['/plats']);
    }
  }

}
