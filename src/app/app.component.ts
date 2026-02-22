import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConectaComponent } from './conecta/conecta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConectaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConectaAPI';
}
