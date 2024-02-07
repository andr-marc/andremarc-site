import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) links!: Link[];

  scrollTo(route: string) {
    
    document.getElementById(route)!.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
