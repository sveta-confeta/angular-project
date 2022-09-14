import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: "[appStyle]"
})

export class StyleDirective {
  @Input('appStyle') color: string//сидит цвет по умолчанию
  @Input() dStyle:{border:string, borderRadius:string,fontWeight:string}

  constructor(private el: ElementRef, private r: Renderer2) {
  }


  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
  }
}
