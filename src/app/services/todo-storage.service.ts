import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'angular'},
    {title: 'interface'}
  ];
  constructor() { }

  addTodo(title: string) {
    console.log(title)
    this.todoItems.push({title});

  }
  removeTodo(todoIndex:number){
    this.todoItems.splice(todoIndex,1);
  }

}

