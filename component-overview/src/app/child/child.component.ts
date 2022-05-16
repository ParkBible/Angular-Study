import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h3>"{{name}}"</h3>'
})
export class ChildComponent implements OnInit {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
    console.log("s")
  }
  private _name = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
