import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';


@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private games;
  private showAddRow = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAll().subscribe((result) => {
      this.games = result;
    });
  }

  refresh(){
    this.gameService.getAll().subscribe((result) => {
      this.games = result;
    });
  }

  delete(row){
    this.gameService.delete(row.id).subscribe((result) => {
      this.refresh();
    });
  }

  add(name : string, duration : string, capacity : string){

    if(name && duration && capacity){
      this.gameService.add(name,duration,capacity).subscribe((result) => {
        this.refresh();
      });
    }
  }

  edit(row){
    console.log(row);
  }

  showAddRowF(){
    this.showAddRow = !this.showAddRow;
  }


}
