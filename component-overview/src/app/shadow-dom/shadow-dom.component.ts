import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-component-overview></app-component-overview>
  `,
  styles: ['h2, .shadow-message {color:red}'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
