import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PoiConfig} from "../PoiConfig";
import {PoiService} from "../poi.service";

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})

export class POIComponent implements OnInit {
  inputKeyword: string

  constructor(private poiService: PoiService) {
    this.inputKeyword = "";
  }
  poiConfig: PoiConfig[] = [];

  getData(): void{
    this.poiService.getData(this.inputKeyword).subscribe(response => this.poiConfig = response);
  }


  ngOnInit(): void {
  }

}
