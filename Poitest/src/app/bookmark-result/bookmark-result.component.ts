import {Component, Input, OnInit} from '@angular/core';
import {BookmarkConfig} from "../BookmarkConfig";
import {BoardEntityConfig} from "../BoardEntityConfig";
import {BookmarkService} from "../bookmark.service";
import {BookmarkComponent} from "../bookmark/bookmark.component";

@Component({
  selector: 'app-bookmark-result',
  templateUrl: './bookmark-result.component.html',
  styleUrls: ['./bookmark-result.component.css']
})
export class BookmarkResultComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService,
  private bookmarkComponent: BookmarkComponent) {
    this.modifiedBookmarkName = "";
  }

  @Input() bookmarkResult?: BookmarkConfig;

  selectedBookmark?: BoardEntityConfig;
  modifiedBookmarkName: string;

  onSelect(bookmark: BoardEntityConfig): void{
    this.selectedBookmark = bookmark;
  }

  ngOnInit(): void {
  }

  modifyBookmarkName(boardEntityConfig: BoardEntityConfig){
    this.selectedBookmark = undefined;
    boardEntityConfig.bookmarkName = this.modifiedBookmarkName;
    this.bookmarkService.modifyBookmarkName(boardEntityConfig).subscribe();
  }

  deleteBookmark(bookmarkNo: number){
    this.bookmarkService.deleteBookmark(bookmarkNo).subscribe(() => this.fetchBookmark());
  }

  fetchBookmark(){
    this.bookmarkComponent.getBookmark(0);
  }

  getPrePageBookmark(pageNum: number){
    if(this.bookmarkResult?.presentPage){
      if(this.bookmarkResult?.presentPage >= 0)
        this.bookmarkComponent.getBookmark(pageNum-1)
    }
  }

  getNextPageBookmark(pageNum: number){
    if(this.bookmarkResult?.totalPage){
      if(this.bookmarkResult?.presentPage+1 < this.bookmarkResult?.totalPage)
        this.bookmarkComponent.getBookmark(pageNum+1)
    }
  }
}
