import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>() //потому что будем передвать id этого поста
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() {
  }

  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }

  remove() {
    this.onRemove.emit(this.post.id)
  }

}
