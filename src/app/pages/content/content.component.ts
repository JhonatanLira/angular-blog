import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string="https://img.elo7.com.br/product/original/37EBEF7/painel-1x65cm-pantera-negra-wakanda-festa-expressa.jpg"
  contentTitle:string="Minha notícia"
  contentDescription:string="Olá, mundo!"
}
