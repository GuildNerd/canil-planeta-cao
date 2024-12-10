import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent {
  @Input() urlImg!: string;
  @Input() descricaoImg!: string;
  @Input() nomeServico!: string;
  @Input() texto!: string;
  @Input() corFundo!: string;
}
