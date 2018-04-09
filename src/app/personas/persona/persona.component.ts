import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../shared/persona.service'
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private personaService : PersonaService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null)
      form.reset();
    this.personaService.selectedPersona = {
      idPersonal: '',
      nombre: '',
      apepat: '',
      apemat: ''
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.idPersonal == null) {
      this.personaService.postPersona(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.personaService.getPersonaList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    else {
      this.personaService.putPersona( form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.personaService.getPersonaList();
       // this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
}
