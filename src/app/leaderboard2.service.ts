import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Leaderboard2Service {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

 
  
}
