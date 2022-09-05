import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./services/todo-storage.service";
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  todoItems: TodoModel[] = []; //оставляем инициализацию, остальное в сервис
  product: IProduct[] = [];// инициализация продукта
  loading = false;

  constructor(private todoStorege: TodoStorageService, private productService: ProductsService) { //сдесь у нас подключение сервиса
  }

  ngOnInit(): void {
    this.loading = true
    this.todoItems = this.todoStorege.todoItems, //достали данные из сервиса
      this.productService.getAll().subscribe(products => {
        this.product = products;
        this.loading = false;
      })

  }

  addTodo(title: string) { //достали колбэк из сервиса и его тут вызвали
    this.todoStorege.addTodo(title);
  }

  removeTodo(todoIndex: number) {
    this.todoStorege.removeTodo(todoIndex)
  }
}
