import { Component } from '@angular/core';

type Parceiro = {
  urlImg: string,
  descricaoImg: string,
  nome: string,
}

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {
  parceiros: Parceiro[] = [
    {
      urlImg: "/parceiros/suzano.png",
      descricaoImg: "Logo da empresa Suzano S.A",
      nome: "Suzano S.A",
    },
    {
      urlImg: "/parceiros/arte_leste.png",
      descricaoImg: "Logo da empresa Arte Leste Construções",
      nome: "Arte Leste Construções",
    },
    {
      urlImg: "/parceiros/lara_eng.png",
      descricaoImg: "Logo da empresa Lara Engenharia",
      nome: "Lara Engenharia",
    },
    {
      urlImg: "/parceiros/colabore.png",
      descricaoImg: "Logo da empresa Grupo Colabore",
      nome: "Grupo Colabore",
    },
    {
      urlImg: "/parceiros/pamtech.jpeg",
      descricaoImg: "Logo da empresa Pamtech Soluções em Monitoramento",
      nome: "Pamtech Soluções em Monitoramento",
    },
    {
      urlImg: "/parceiros/reis_servicos.jpeg",
      descricaoImg: "Logo da empresa Reis Serviços",
      nome: "Reis Serviços",
    },
    {
      urlImg: "/parceiros/sparta.jpeg",
      descricaoImg: "Logo da empresa Sparta Serviços Terceirizados",
      nome: "Sparta Serviços Terceirizados",
    },
  ]
}
