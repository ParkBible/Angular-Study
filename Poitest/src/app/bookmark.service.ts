import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BookmarkConfig} from "./BookmarkConfig";
import {BoardEntityConfig} from "./BoardEntityConfig";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBookmark(bookmarkName: string, placeName: string, address: string, pageNum: number) {
    return this.http.get<BookmarkConfig>("http://localhost:8080/bookmark?bookmarkName="+bookmarkName
                                    +"&placeName="+placeName+"&address="+address+"&pageNum="+pageNum);
  }

  addBookmark(boardEntityConfig: BoardEntityConfig){
    return this.http.post<BoardEntityConfig>("http://localhost:8080/bookmark", boardEntityConfig, this.httpOptions)
  }

  modifyBookmarkName(boardEntityConfig: BoardEntityConfig){
    return this.http.patch<BoardEntityConfig>("http://localhost:8080/bookmark", boardEntityConfig, this.httpOptions)
  }

  deleteBookmark(bookmarkNo: number){
    return this.http.delete<BoardEntityConfig>("http://localhost:8080/bookmark/"+bookmarkNo, this.httpOptions)
  }
}
