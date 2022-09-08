import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from "../../models/todo-model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  arr=[1,40,6,4,80,43,1,7];

  @Input() todo: TodoModel = {title: ''};
  @Output() deleteTodo = new EventEmitter<void>();

  onDeleteTodo(){
    this.deleteTodo.emit();
  }

}
