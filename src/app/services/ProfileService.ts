import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = `${environment.apiUrl}/profiles`;

  getAllProfiles(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      observer.next([{ id: 1, name: "James Logan" }]);
      observer.complete();
    });
  }

  createProfile(): void {
    console.log('createProfile called');
  }

  // constructor(private http: HttpClient) { }

  // getAllProfiles(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  
  // searchProfiles(query: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/search`, { params: { query } });
  // }

  // createProfile(profile: { name: string }): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, profile);
  // }
}