import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../models/cliente.model';

const baseUrl = 'http://127.0.0.1:8000/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  getTodosClientes(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getDetalhesCliente(id: any): Observable<Cliente> {
    return this.http.get(`${baseUrl}/detail/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  buscar(id: any, nome: any, idade: any, cidade: any, ordenar: any, pagina ='1'): Observable<any> {
    return this.http.get<any>(`${baseUrl}?id=${id}&nome=${nome}&idade=${idade}&cidade=${cidade}&ordenar=${ordenar}&page=${pagina}`);
  }
}
