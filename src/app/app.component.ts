import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./services/todo-storage.service";
import {IProduct} from "./models/product";
import {product as data} from "./data/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular';
  todoItems: TodoModel[] = []; //оставляем инициализацию, остальное в сервис
  product:IProduct[]=data;// инициализация продукта

  constructor(private todoStorege: TodoStorageService) {

  }
  ngOnInit() {
    this.todoItems=this.todoStorege.todoItems; //достали данные из сервиса
  }

  addTodo(title: string) { //достали колбэк из сервиса и его тут вызвали
   this.todoStorege.addTodo(title);
  }

  removeTodo(todoIndex:number){
    this.todoStorege.removeTodo(todoIndex)
  }
}
