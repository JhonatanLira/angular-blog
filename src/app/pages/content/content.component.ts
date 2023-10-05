import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string="https://img.elo7.com.br/product/original/37EBEF7/painel-1x65cm-pantera-negra-wakanda-festa-expressa.jpg"
  contentTitle:string="Minha notícia"
  contentDescription:string="Olá, mundo!"

  constructor(
    private route: ActivatedRoute
  ){ }


  ngOnInit(): void {
    this.route.paramMap.subscribe ( value =>
        console.log(value.get("id"))
    )

  }
}
