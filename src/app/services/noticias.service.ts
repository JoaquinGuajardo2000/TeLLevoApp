import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }

  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fa78de6b500481780b5034d9d6b85dc')
  }
}
