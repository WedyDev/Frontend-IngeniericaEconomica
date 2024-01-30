import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
@Component({
  selector: 'app-index-mostrar',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,ToolbarComponent],
  templateUrl: './index-mostrar.component.html',
  styleUrl: './index-mostrar.component.css'
})
export class IndexMostrarComponent {

}
