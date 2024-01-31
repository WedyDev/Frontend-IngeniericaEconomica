import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterMostrarComponent } from './footer-mostrar/footer-mostrar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,FooterMostrarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }
  ngOnInit(): void {}
}



