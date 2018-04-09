import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../shared/persona.service'
import { Persona } from '../shared/persona.model';
@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  constructor(private personaService : PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonaList();
  }
  showForEdit(per: Persona) {
    this.personaService.selectedPersona = Object.assign({}, per);;
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.personaService.deletePersona(id)
      .subscribe(x => {
        this.personaService.getPersonaList();
        //this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }
}
