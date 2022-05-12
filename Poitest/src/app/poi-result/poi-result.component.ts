import {Component, Input, OnInit} from '@angular/core';
import {PoiConfig} from "../PoiConfig";
import {BookmarkService} from "../bookmark.service";
import {BoardEntityConfig} from "../BoardEntityConfig";

@Component({
  selector: 'app-poi-result',
  templateUrl: './poi-result.component.html',
  styleUrls: ['./poi-result.component.css']
})
export class PoiResultComponent implements OnInit {

  @Input() poiResult?: PoiConfig[];

  selectedPoi?: PoiConfig;

  onSelect(poi: PoiConfig): void{
    this.selectedPoi = poi;
  }

  bookmarkName: string;
  boardEntityConfig?: BoardEntityConfig;

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkName = "";
  }

  addBookmark(placeName: string, address: string, x: string, y: string): void{
    this.selectedPoi = undefined;

    this.boardEntityConfig = {
      no: 0,
      bookmarkName: this.bookmarkName,
      placeName: placeName,
      address: address,
      x: parseFloat(x),
      y: parseFloat(y),
    }
    this.bookmarkService.addBookmark(this.boardEntityConfig).subscribe();
  }

  ngOnInit(): void {
  }

}
