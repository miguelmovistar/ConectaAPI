import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConectaComponent } from './conecta/conecta.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConectaComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConectaAPI';
}
