import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import { ServicesdatosService, Usuario } from '../../services/servicesdatos.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  noticias: Article[] = [];

  constructor(private menuController: MenuController,
    private servicesDatos: ServicesdatosService,
    private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp =>{
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  


}
