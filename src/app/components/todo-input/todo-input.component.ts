import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = " ";
  img="https://wallbox.ru/resize/320x240/wallpapers/main2/201705/trava-koski-kotata.jpg"
  text="";
  toggle = false;
  @Output() submit = new EventEmitter<string>();

  constructor() {
  }

  onIn(inputValue:string){
    this.text= inputValue
  }

  ngOnInit(): void {
  }

  submitTodo() {
    this.submit.emit(this.todoTitle);
    this.todoTitle = " ";
  }

}
