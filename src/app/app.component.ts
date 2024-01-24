import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component'
import { BigCardComponent } from './components/big-card/big-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent, SmallCardComponent, BigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
