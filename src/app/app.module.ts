import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Providers
import { UserService } from './user.service';
import { UsersService } from './users.service';
import { GameService } from './game.service';
import { CurrentGameService } from './currentgame.service';
import { LoggedInGuard } from './logged-in.guard';
import * as io from 'socket.io-client';

//Declarations
import { LoginComponent } from './login/login.component';
import { CurrentGamesComponent } from './current-games/current-games.component';
import { GamesComponent } from './games/games.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { OrderBy } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CurrentGamesComponent,
    LoginComponent,
    GamesComponent,
    UsersComponent,
    HeaderComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    GameService,
    UsersService,
    CurrentGameService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
