import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {
  nombre: string;
  apellido: string;
  img: string;
  titulo: string;
  descripcion: string;

  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const Persona = new persona(this.nombre, this.apellido, this.img, this.titulo, this.descripcion);
    this.personaS.createPersona(Persona).subscribe(
      data => {
        alert ("Persona creada correctamente")
        this.router.navigate(['']);
      }, err => {
        alert ("Fallo al crear nueva persona")
        this.router.navigate(['']);
      }
    )
  }

}
