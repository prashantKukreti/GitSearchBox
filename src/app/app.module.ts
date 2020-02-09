import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitUserService} from './services/git-user.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GitUsersComponent } from './components/git-users.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
