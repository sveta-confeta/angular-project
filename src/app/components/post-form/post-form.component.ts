import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = ''
  text = ''

  @Output() onAdd:EventEmitter<Post> = new EventEmitter<Post>()



  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(){
    if(this.title.trim() && this.text.trim()){
      const post:Post={
        title:this.title,
        text:this.text
      }
      this.onAdd.emit(post)
      this.title=this.text=" " //очишаем поля
    }
  }

}
