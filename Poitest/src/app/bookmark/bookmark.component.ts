import { Component, OnInit } from '@angular/core';
import {BookmarkService} from "../bookmark.service";
import {BookmarkConfig} from "../BookmarkConfig";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkName = "";
    this.placeName = "";
    this.address = "";
  }
  bookmarkConfig?: BookmarkConfig;

  bookmarkName: string;
  placeName: string;
  address: string;

  ngOnInit(): void {
  }

  getBookmark(pageNum: number): void{
    this.bookmarkService.getBookmark(this.bookmarkName, this.placeName, this.address, pageNum)
      .subscribe(response => this.bookmarkConfig = response);

}

}
