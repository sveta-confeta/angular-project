import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = " ";
  @Output() submit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitTodo() {
    this.submit.emit(this.todoTitle);
    this.todoTitle = " ";
  }

}
