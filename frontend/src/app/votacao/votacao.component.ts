import { Component, OnInit } from '@angular/core';
import {Participante} from "../model/participante";
import {RestService} from "../service/RestService";

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {

  title = 'Paredão BBB22: Vote para eliminar';
  participantes: Participante[] | undefined;

  constructor(private restService : RestService) {}

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this.restService.getData('/participantes').subscribe((participantes) => {
      this.participantes = participantes;
    }) ;
  }

}
