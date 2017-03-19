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
import { GameService } from './game.service';
import { LoggedInGuard } from './logged-in.guard';

//Declarations
import { LoginComponent } from './login/login.component';
import { CurrentGamesComponent } from './current-games/current-games.component';
import { GamesComponent } from './games/games.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentGamesComponent,
    LoginComponent,
    GamesComponent,
    UsersComponent,
    HeaderComponent
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
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
