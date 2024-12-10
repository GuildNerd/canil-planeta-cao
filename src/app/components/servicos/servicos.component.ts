import { Component } from '@angular/core';
import { ServicoComponent } from "./servico/servico.component";

type Servico = {
  urlImg: string,
  descricaoImg: string,
  nome: string,
  texto: string,
  corFundo: string,
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [ServicoComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicos: Servico[] = [
    {
      urlImg: "/icones-servicos/clinica.png",
      descricaoImg: "Foto da Dra. Fabiana com um cão da raça pastor alemão",
      nome: "Atendimento veterinário",
      texto: "Nosso atendimento veterinário deixa seu pet novo em folha. Conheça nossos serviços veterinários hoje, temos desde cuidados com a saúde do seu cão, até produtos para cuidar melhor do seu animalzinho do coração.",
      corFundo: "#12dec3"
    },
    {
      urlImg: "/icones-servicos/coleira.png",
      descricaoImg: "Imagem de um cãozinho feliz e um certificado de cão adestrado no Canil Planeta Cão",
      nome: "Adestramento",
      texto: "Seu cão ainda não é adestrado? Venha conhecer nosso serviço de adestramento para ajudar na educação e comportamento do seu amigo de 4 patas!",
      corFundo: "#d6431a"
    },
    {
      urlImg: "/icones-servicos/escudo.png",
      descricaoImg: "Foto de cão sendo treinado no método K9, para garantir a segurança de residências e comércios",
      nome: "Treinamento de guarda",
      texto: "Se a sua necessidade é ter um cão de guarda para proteger sua casa ou comércio, é só nos chamar. Nossos profissionais certificados preparam seu cão para defender seu patrimônio, afastando e atacando qualquer invasor.",
      corFundo: "#2160ff"
    },
    {
      urlImg: "/icones-servicos/hotel.png",
      descricaoImg: "Imagem de cão feliz no hotel para cães, com um recipiente para água ao fundo",
      nome: "Hospedagem",
      texto: "Está indo viajar ou tem um compromisso urgente, e não quer deixar seu cãozinho sozinho? Com nosso hotel bom pra cachorro você garante que seu melhor amigo tenha a melhor experiência da cidade!",
      corFundo: "#8152f7"
    },
  ]
}
