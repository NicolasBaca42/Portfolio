import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertifiedComponent } from './components/certified/certified.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  {path:'principal',  component:MainComponent},
  {path:'acercaDe', component:AboutMeComponent},
  {path:'certified', component:CertifiedComponent},
  {path:'contact', component:ContactComponent},
  {path:'skill', component:SkillComponent},
  {path:'work', component:WorksComponent},
  {path:'',redirectTo:'/principal', pathMatch:'full'},
  {path:'**',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
