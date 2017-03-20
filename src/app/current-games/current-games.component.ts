import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentGameService } from '../currentgame.service';

@Component({
  selector: 'app-current-games',
  templateUrl: './current-games.component.html',
  styleUrls: ['./current-games.component.css']
})
export class CurrentGamesComponent implements OnInit,OnDestroy {
private currentGames;
private currentGamesHTTP;
private connection;

  constructor(private currentgameService: CurrentGameService) {
    this.currentgameService.getAll().subscribe((result) => {
      this.currentGamesHTTP = result;
    });
  }

  ngOnInit() {
    /*this.connection = this.currentgameService.getMessages().subscribe((game) => {
     //this.currentGames.push(game);
     console.log(game);
   })
    console.log(this.connection);*/
  }

  ngOnDestroy() {
   //this.connection.unsubscribe();
 }

 refresh(){
   this.currentgameService.getAll().subscribe((result) => {
     this.currentGamesHTTP = result;
   });
 }


  addCurrentGame(){
    this.currentgameService.random().subscribe((result) => {
      //console.log(result);
      this.refresh();
    });
  }

}
