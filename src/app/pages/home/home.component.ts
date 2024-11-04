import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="banner">
      <div id="imagem"></div>
      <h1>Segurança da Informação</h1>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    #banner {
        position: relative;
    }
    #imagem {
        width: 100%;
        height: 600px;
        background-image: url('../../../assets/bannersegurancadainformacao.png');
        background-size: cover;
        background-position: center;
    }
    #imagem::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
    }
    h1 {
      font-size: 80px;
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class HomeComponent {} 