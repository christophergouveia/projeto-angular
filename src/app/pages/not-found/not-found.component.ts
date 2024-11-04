import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a routerLink="/home">Voltar para a página inicial</a>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    a {
      color: #007bff;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class NotFoundComponent {} 