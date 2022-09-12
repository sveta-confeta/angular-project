import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./services/todo-storage.service";
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
import {Post} from "./models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  term = '';
  product: IProduct[] = [];// инициализация продукта
  loading = false;
  posts: Post[] = [
    {title: "хочу выучить angular", text: " Я все еще учу", id: 1},
    {title: "хочу отличную работу", text: " Я все еще ищу", id: 2}
  ]

  constructor(private todoStorege: TodoStorageService, private productService: ProductsService) { //сдесь у нас подключение сервиса
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  ngOnInit(): void {
    this.loading = true
      this.productService.getAll().subscribe(products => {
        this.product = products;
        this.loading = false;
      })

  }

  addTodo(title: string) { //достали колбэк из сервиса и его тут вызвали
    this.todoStorege.addTodo(title);
  }

  removePost(id:number){
    this.posts=this.posts.filter(f => f.id !== id)
  }

  removeTodo(todoIndex: number) {
    this.todoStorege.removeTodo(todoIndex)
  }
}
