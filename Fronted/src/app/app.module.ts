import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes} from '@angular/router';
import { SerchLobbyComponent } from './serch-lobby/serch-lobby.component';
import { SalaComponent } from './sala/sala.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes : Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'serchingLobby', component: SerchLobbyComponent
    
  },
  {
    path: 'sala', component: SalaComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SerchLobbyComponent,
    SalaComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
