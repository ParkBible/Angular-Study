import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PoiConfig} from "./PoiConfig";

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  constructor(private http: HttpClient) {
  }

  getData(queryText: string) {
    return this.http.get<PoiConfig[]>("http://localhost:8080/poi/"+queryText);
  }

}
