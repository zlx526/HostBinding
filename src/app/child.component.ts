import { Component, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  
  I am the child
 
  `
})


export class ChildComponent {

  @HostBinding('style.background-color') color = 'pink';
  // @HostBinding('innerHTML') html = '<b>bolded</b>';

  @HostListener('click', ['$event']) onClick(e) {   
    this.color = this.color === 'pink' ? 'yellow' : 'pink';
  }

}
