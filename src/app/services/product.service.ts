import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoResponseModel } from '../models/TodoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<TodoResponseModel> {  // 'rxjs'
    return this.httpClient.get<TodoResponseModel>(this.apiUrl);  // this.todoResponseModel = response;

  }
}
