import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ServicosComponent } from "./components/servicos/servicos.component"
import { ContatosComponent } from "./components/contatos/contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SobreComponent, ServicosComponent, ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canil-planeta-cao';
}
