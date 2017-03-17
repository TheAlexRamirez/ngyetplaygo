//import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { CurrentGamesComponent } from './current-games/current-games.component';
import { GamesComponent } from './games/games.component';
import { UsersComponent } from './users/users.component';

import { LoggedInGuard } from './logged-in.guard';

export const routes = [
  { path: '', component: CurrentGamesComponent, pathMatch: 'full',canActivate: [LoggedInGuard]  },
  { path: 'games',  component: GamesComponent,pathMatch: 'full',canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent,pathMatch: 'full',canActivate: [LoggedInGuard] }
];
