import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  usuario = {
    email:''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  go(){
    this.router.navigate(['inicio'])
  }

}
