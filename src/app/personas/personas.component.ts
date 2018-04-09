import { Component, OnInit } from '@angular/core';
import { PersonaService } from './shared/persona.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaService]
})
export class PersonasComponent implements OnInit {

  constructor(private personaService : PersonaService) {}

  ngOnInit() {
  }

}
