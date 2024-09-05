import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://your-api-url/resume'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getResumeData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}