import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationComponent} from './formation/formation.component';
import {BiographieComponent} from './biographie/biographie.component';
import {CompetencesComponent} from './competences/competences.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path:'',redirectTo:'Biographie',pathMatch:'full'},
  {path:'Biographie',component:BiographieComponent},
  {path: 'Formation', component: FormationComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Competences',component:CompetencesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
