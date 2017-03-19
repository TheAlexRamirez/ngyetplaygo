import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user;
  constructor(private userService: UserService) {
    this.user = this.userService.info();
    //console.log(this.user);
  }

  ngOnInit() {

  }

  logout(){
    this.userService.logout();
  }

}
