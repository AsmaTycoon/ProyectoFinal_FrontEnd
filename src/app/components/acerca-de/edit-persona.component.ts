import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  Persona: persona = null;

  constructor(private personsaS: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personsaS.findPersona(id).subscribe(
      data => {
        this.Persona = data;
      }, err => {
        alert ("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personsaS.editPersona(id, this.Persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

}
