import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Answer} from '../../model/answer';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${API_URL}/answers`, answer);
  }

  getAnswerById(id: number): Observable<Answer>{
    return this.http.get<Answer>(`${API_URL}/answers/${id}`);
  }

  updateAnswer(answer: Answer, id: number): Observable<Answer>{
    return this.http.put<Answer>(`${API_URL}/answers/update/${id}`, answer)
  }

  getAllAnswer(): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${API_URL}/answers`)
  }

  deleteAnswer(id: number): Observable<Answer>{
    return this.http.delete<Answer>(`${API_URL}/answers/delete/${id}`)
  }

  listAnswerByQuestion(id: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${API_URL}/getAllAnswerByQuestion/${id}`)
  }
}
