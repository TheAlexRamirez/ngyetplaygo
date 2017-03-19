import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users;
  private showAddRow = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe((result) => {
      this.users = result;
    });
  }

  refresh(){
    this.usersService.getAll().subscribe((result) => {
      this.users = result;
    });
  }

  delete(row){
    this.usersService.delete(row.id).subscribe((result) => {
      this.refresh();
    });
  }

  add(email : string, role : string){

    if(email && role){
      this.usersService.add(email,role).subscribe((result) => {
        this.refresh();
      });
    }
  }

  edit(row){
    this.usersService.update(row).subscribe((result) => {
      this.refresh();
    });
  }

  showAddRowF(){
    this.showAddRow = !this.showAddRow;
  }

  showEditRow(row){
    row.isEdited = !row.isEdited;
  }

}
