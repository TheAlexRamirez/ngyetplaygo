import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Providers
import { UserService } from './user.service';
import { LoggedInGuard } from './logged-in.guard';

//Declarations
import { LoginComponent } from './login/login.component';
import { CurrentGamesComponent } from './current-games/current-games.component';
import { GamesComponent } from './games/games.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentGamesComponent,
    LoginComponent,
    GamesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
