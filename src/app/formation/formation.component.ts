import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
certification:any[]=[]
pp: number = 1
  constructor() { }

  ngOnInit(): void {
    this.certification=[
      {titre:"Adobe illustrator CC",date:"30-05-2021",image:"illustrator.jpg"},
      {titre:"Adobe photoshop CC",date:"20-02-2021",image:"photoshop.jpg"},
      {titre:"Angular et sprint boot",date:"3-01-2021",image:"0001.jpg"},
      {titre:"Construction d'un site Wordpress",date:"14-11-2020",image:"wordpress.png"},
      {titre:"Manipulation des bases de données",date:"9-10-2020",image:"manipulation%20data.png"},
      {titre:"Principes et processus de UX",date:"22-07-2020",image:"ux.png"},
      {titre:"Java Orienté Objet",date:"19-07-2020",image:"orintejava.png"},

    ]
  }

}
