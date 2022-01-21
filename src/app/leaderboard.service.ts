import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLeaderboard(){
    return this.http.get('http://localhost:8080/v1/leaderboard/honor');
  }

  getLeaderboardByLanguage(language: string){
    return this.http.get('http://localhost:8080/v1/leaderboard/language/'+language);
  }

  addUser(createUserJSON: any){
    return this.http.post('http://localhost:8080/v1/leaderboard/add/', createUserJSON, {responseType: 'text'});
  }

  
  
}
