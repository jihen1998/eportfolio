import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
projects:any[]=[]
  constructor() { }
  ;pp: number = 1
  images:any[]=[]
  ngOnInit(): void {
this.images=["alan.png","yas.png","compet.png","artboard.png","artboard13.png",]
    this.projects=[
    
      {name:"Réalisation d'une application web et mobile pour le restaurant maria Cantina",outils:["laravel","ionic","angular","bootstrap"],lien:"https://mariacantina.fr/",
   tache:["gestion de commandes","utilisation des cookies pour le web et local storage pour le mobile","géolocalisation","payer en ligne","téléchargement des images en utilisant l'appareil photo du téléphone ou depuis la galerie "], date:[{debut:"01-06-2021",fin:"01-08-2021"}],video:"assets/maria_cantina.mp4"},
    
      {name:"Réalisation d'un site immobilier Dari.tn",tache:["gestion des annonces","notification en temps réel","chat instantanné","estimation prix"],outils:["spring boot","spring security","angular","bootstrap"],
      date:[{debut:"01-02-2021",fin:"01-05-2021"}] ,video:"assets/dari.mp4"},
      {name:"Réalisation d'un site web pour un restaurant Cuis'Art ",outils:["html","css","bootstrap"]
      , date:[{debut:"01-06-2020", fin:"01-07-2020"}],video:"assets/cuisart.mp4"},
      
       
    {name:"Réalisation d'un site Wordpress d'actualités",tache:[" Les articles du journal et toute l'actualité en continu : International, Politique, Société, Economie,.."],
    date:[{debut:"01-12-2020", fin:""}],video:"assets/wordpress.mp4"} ,
    {name:"Réalisation d'une application web qui gére le retrait ",outils:["php","css","html","bootstrap"],tache:["impression en pdf"]
   , date:[{debut:"01-06-2020", fin:"01-07-2020"}],video:"assets/banque.mp4"},
   
    
    ]
  }

}
