import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Master controls {{names.length}} names</h2>

    <app-child *ngFor="let name of names" [name]="name"></app-child>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // 'Dr IQ', '<빈 값>', 'Bombasto'를 표시합니다.
  names = ['Dr IQ', '   ', '  Bombasto  '];

  constructor() { }

  ngOnInit(): void {
  }

}
