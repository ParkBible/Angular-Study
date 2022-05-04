import {Component, Input, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit {

  @Input() test = '';

  constructor() { }
  ngOnChanges(changes: SimpleChange){
    window.alert("change");
  }

  ngOnInit(): void {
  }

}
