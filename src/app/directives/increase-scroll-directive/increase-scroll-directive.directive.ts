import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[IncreaseScrollDirective]'
})
export class IncreaseScrollDirectiveDirective implements OnInit {


  private mouseIn: boolean;

  @Input()
  elementClassName: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.mouseIn = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.mouseIn = false;
  }

  ngOnInit(): void {
    let element: any;
    if(this.el.nativeElement.querySelector(this.elementClassName)){
      element = this.el.nativeElement.querySelector(this.elementClassName)  ;
      this.listenersInQueryElement(element);
    }
    else{
      element = this.el.nativeElement;
    }

    document.addEventListener("mousemove",
      (e) => {
        if (this.mouseIn){

          if(element !== null){
            let distanceX: any = element?.offsetLeft + element?.offsetWidth - e.pageX;
            let distanceY: any = element?.offsetTop + element?.offsetHeight - e.pageY;
            distanceX < 15 && distanceX > -15 ? element.classList.add('more-widthX') : element.classList.remove('more-widthX');
            distanceY < 15 && distanceY > -15 ? element.classList.add('more-widthY') : element.classList.remove('more-widthY');
          }
        }
        else{
          this.el.nativeElement.classList.remove('more-widthX');
          this.el.nativeElement.classList.remove('more-widthY');
        }
      }
    );
  }

  private listenersInQueryElement(el: any){

    el.addEventListener('mouseleave', () => {
      if (this.mouseIn){
        if(el !== null){
          let distanceX: any = el?.offsetLeft + el?.offsetWidth - el.pageX;
          let distanceY: any = el?.offsetTop + el?.offsetHeight - el.pageY;
          distanceX < 15 && distanceX > -15 ? el.classList.add('more-widthX') : el.classList.remove('more-widthX');
          distanceY < 15 && distanceY > -15 ? el.classList.add('more-widthY') : el.classList.remove('more-widthY');
        }
      }
      else{
        this.el.nativeElement.classList.remove('more-widthX');
        this.el.nativeElement.classList.remove('more-widthY');
      }
    });
  }

}
