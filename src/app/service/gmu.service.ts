import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GmuDailySummary {
  date: string;
  average_gmu: number;
  max_gmu: number;
  min_gmu: number;
  last_gmu: number;
}

@Injectable({
  providedIn: 'root'
})
export class GmuService {
  private apiUrl = 'https://gmuindex.onrender.com';

  constructor(private http: HttpClient) {
  }

  /**
   * Chiamata al backend per ottenere la lista dei valori giornalieri GMU.
   */
  getGmu1d(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/1d`);
  }
  getGmu5m(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/5m`);
  }
  getGmu(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}`);
  }
}
