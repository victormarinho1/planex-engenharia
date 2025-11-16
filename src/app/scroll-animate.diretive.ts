import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {

  @Input() animationClass: string = 'animate-fade-in';
  @HostBinding('class') elementClass = 'opacity-0 transition-all duration-700';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.elementClass = this.animationClass;
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}
