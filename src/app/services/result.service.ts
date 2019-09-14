import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  submit(data) {
    return this.http.post('/api/submit', data);
  }

  history() {
    return this.http.get('/api/history');
  }

}
