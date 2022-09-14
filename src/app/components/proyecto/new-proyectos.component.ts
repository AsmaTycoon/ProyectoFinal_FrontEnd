import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreProyecto: string;
  descripcionP: string;
  imagenP: string;

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreProyecto, this.descripcionP, this.imagenP);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto creado correctamente")
        this.router.navigate(['']);
      }, err => {
        alert ("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
