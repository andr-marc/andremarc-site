import { Component } from '@angular/core';
import { Link } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '<AndreMarc />';
  links: Link[] = [
    {
      title: 'Início',
      route: '#inicio',
    },
    {
      title: 'Carreira',
      route: '#carreira',
    },
    {
      title: 'Contatos',
      route: '#contatos',
    },
  ];
}
