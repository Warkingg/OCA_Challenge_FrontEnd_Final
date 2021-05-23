import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Level} from '../../model/level';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  listLevel(): Observable<Level[]> {
    return this.http.get<Level[]>(`${API_URL}/levels`);
  }

  getLevelsByTopic(id: number): Observable<Level[]> {
    return this.http.get<Level[]>(`${API_URL}/levels/GetLevelByTopic/${id}`)
  }
}
