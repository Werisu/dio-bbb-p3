import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../service/RestService";
import {Participante} from "../model/participante";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-registrar-votacao',
  templateUrl: './registrar-votacao.component.html',
  styleUrls: ['./registrar-votacao.component.css']
})
export class RegistrarVotacaoComponent implements OnInit {

  faTwitter = faTwitter;
  faGitHub = faGithub;
  faInstagram = faInstagram;

  faCheck = faCircleCheck;
  title = 'Voto computado';
  voto = '';

  constructor(private route : ActivatedRoute,
              private restService : RestService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.enviarVoto(params['id'])
    });
  }

  enviarVoto(id:string) {
    let request = { id : id }
    this.restService.postData('/votacao', request).subscribe(response => {
      console.log(response)
      let voto = response as Participante;
      // this.voto = voto.nome;
      this.voto = voto.id;
    });
  }

}
