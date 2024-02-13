import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges, input } from '@angular/core';

@Directive({
  selector: '[BorderShadow]',
  standalone: true
})
export class BorderShadowDirective implements OnChanges {

  @Input() inhouver: string = "0px 0px 20px #b35c2b"
  outhouver: string = "0px 10px 10px #aabbcc"


  constructor(private elementRef: ElementRef) {



  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.elementRef.nativeElement.style.boxShadow = `0px 0px 20px red`
  }
  @HostListener("mouseover") fun1() {

    // this.elementRef.nativeElement.style.borderRadius = "40px"
    this.elementRef.nativeElement.style.boxShadow = `${this.inhouver}`

  }

  @HostListener("mouseout") fun2() {

    // this.elementRef.nativeElement.style.borderRadius = "20px"
    this.elementRef.nativeElement.style.boxShadow = ``

  }

  /*
  
  3-Make “Product Card” custom attribute directive that makes 
  a rounded border with shadow around the div displaying products,
   as the following:
  
  a.	Use @HostListner to handle that on hover increases the shadow, and on mouse out back to the original shadow.
  b.	Use ngOnChanges in custom directives.
  
  */

}
