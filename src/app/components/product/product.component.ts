import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';
import { HttpClient } from '@angular/common/http';
import { TodoResponseModel } from 'src/app/models/TodoResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  todos:todo[]= [  ];
  dataLoaded = false;
  apiUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private productService:ProductService) { }  //injection hazır

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.productService.getTodos().subscribe(response=> {
      this.todos = response.data
      this.dataLoaded = true;
    })
  }

}
