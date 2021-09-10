import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Testitem } from '../classes/testitem';

const baseUrl = 'http://localhost:8080/api/testitems';

@Injectable({
  providedIn: 'root'
})
export class TestitemService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  sendListUpdateAlert(testitemMessage: string) {
    this.subject.next({ text: testitemMessage });
  }

  getListUpdateAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  getAllTestitem(): Observable<Testitem[]> {
    return this.http.get<Testitem[]>(baseUrl);
  }

  getTestitem(id: any): Observable<any> {
    return this.http.get(`${ baseUrl }/${ id }`);
  }

  createTestitem(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateTestitem(id: any, data: any): Observable<any> {
    return this.http.put(`${ baseUrl }/${ id }`, data);
  }

  deleteTestitem(id: any): Observable<any> {
    return this.http.delete(`${ baseUrl }/${ id }`);
  }
}
