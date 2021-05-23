import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../../model/topic';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${API_URL}/topics/create`, topic);
  }topic

  getTopicById(id: number): Observable<Topic>{
    return this.http.get<Topic>(`${API_URL}/topics/find/${id}`);
  }

  updateTopic(topic: Topic, id: number): Observable<Topic>{
    return this.http.put<Topic>(`${API_URL}/topics/${id}`, topic)
  }

  getAllTopic(): Observable<Topic[]>{
    return this.http.get<Topic[]>(`${API_URL}/topics`)
  }

  deleteTopic(id: number): Observable<Topic>{
    return this.http.delete<Topic>(`${API_URL}/topics/${id}`)
  }
}
