import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './components/acerca-de/edit-persona.component';
import { NewPersonaComponent } from './components/acerca-de/new-persona.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { NewbannerComponent } from './components/banner/newbanner.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyecto/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyecto/new-proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'newproyecto', component: NewProyectosComponent},
  { path: 'editproyecto/:id', component: EditProyectosComponent},
  { path: 'newbanner', component: NewbannerComponent},
  { path: 'editbanner/:id', component: EditBannerComponent},
  { path: 'editar/:id', component: EditPersonaComponent},
  { path: 'newpersona', component: NewPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
