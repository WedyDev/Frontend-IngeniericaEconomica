import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-toolbar-mostrar',
  standalone: true,
  imports: [LoginComponent,RouterOutlet,RouterLink],
  templateUrl: './toolbar-mostrar.component.html',
  styleUrl: './toolbar-mostrar.component.css'
})
export class ToolbarMostrarComponent {

}
