import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Persona} from './persona.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class PersonaService {
  selectedPersona : Persona;
  personaList : Persona[];
  url = "http://localhost:8080/backCGH03/webresources/service.seldatospersonales";
  constructor(private http  : Http) { }
  postPersona(per : Persona){
    var body = JSON.stringify(per);
    console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({headers : headerOptions});
    return this.http.post(this.url,body,requestOptions).map(x => x.json());
  }
  getPersonaList(){
    this.http.get(this.url)
    .map((data : Response) =>{
      return data.json() as Persona[];
    }).toPromise().then(x => {
      this.personaList = x;
    })
  }
  putPersona(per) {
    var body = JSON.stringify(per);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this.http.put(this.url, body, requestOptions).map(res => res.json());
  }
  deletePersona(id: string) {
    console.log(this.url+'/'+id);
    return this.http.delete(this.url+'/'+id).map(res => res.json());
  }
}
