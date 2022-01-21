
import { LeaderboardService } from './../leaderboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  data : any;
  username: string = "";
  language: string = "";



  
  constructor(private leaderboardService : LeaderboardService) { }

  ngOnInit(){
    this.showLeaderboard()
  }


  showLeaderboard(){
    this.leaderboardService.getLeaderboard()
    .subscribe(result => {
      this.data = result;
      console.log(result);
    })
  }  

  showLeaderboardByLanguage(){
    const languageJSON = {
      "language": this.language
     } 
    this.leaderboardService.getLeaderboardByLanguage(languageJSON.language)
    .subscribe(result => {
      this.data = result;
      console.log(result);
    })
  }  
  
  createUser(){
     const userJSON = {
      "username": this.username
     } 

     this.leaderboardService.addUser(userJSON)
     .subscribe(result => console.log(result));

     setTimeout(() => {
       this.showLeaderboard()
     }, 8000)
  }


}


