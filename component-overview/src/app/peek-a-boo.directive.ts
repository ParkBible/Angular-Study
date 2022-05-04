import { Directive, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appPeekABoo]'
})
export class PeekABooDirective implements OnInit{

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logIt('OnInit');
  }
  logIt(msg: String){
    this.logger.log('#${nextId++} ${msg}');
  }
}
