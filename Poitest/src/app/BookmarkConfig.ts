import {BoardEntityConfig} from "./BoardEntityConfig";

export interface BookmarkConfig{
  pageList: BoardEntityConfig[];
  presentPage: number;
  totalPage: number;
}
