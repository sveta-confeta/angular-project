import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector:"[appStyle]"
})

export class StyleDirective{
constructor(private el:  ElementRef, private r: Renderer2) { //el-это наш  тег p
  this.r.setStyle(this.el.nativeElement, 'color','red') //setStyle помогает добавлять какие то стили
  // первым параметором setStyle добавляет нативный элемент (this.el.nativeElement), вторым -название того стиля который хотим изменить
  // третий параметр на какое значение мы хотим его изменить.
// el.nativeElement.style.color="red"
}

@HostListener('click',['$event.target']) onClick(event: Event){
  console.log(event) //получаем наш р
}
@HostListener('mouseenter') onEnter(){
  this.r.setStyle(this.el.nativeElement, 'color','green')
}
  @HostListener('mouseleave') onLeave(){
    this.r.setStyle(this.el.nativeElement, 'color',null)
  }
}
