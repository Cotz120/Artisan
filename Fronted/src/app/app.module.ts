import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes} from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { HeaderComponent } from './header/header.component';


const appRoutes : Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'sala', component: SalaComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent,
    HeaderComponent
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
