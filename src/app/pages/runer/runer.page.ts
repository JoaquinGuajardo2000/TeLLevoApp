import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-runer',
  templateUrl: './runer.page.html',
  styleUrls: ['./runer.page.scss'],
})
export class RunerPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
