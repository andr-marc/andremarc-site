import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  yearsOld: number = 0;

  ngOnInit() {
   
    let timeDiff = Math.abs(Date.now() - new Date(1999, 6, 2).getTime());
    this.yearsOld = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

}
