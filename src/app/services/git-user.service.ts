import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  private username : string ;
  
  

  constructor(private _http: HttpClient) { }
  
// api calls for getting user info and repositories
  getUserInfo(){
      return this._http.get("https://api.github.com/users/"+ this.username).pipe(map(res=> res))
  }

  getUserRepos(){
    return this._http.get("https://api.github.com/users/"+ this.username +"/repos").pipe(map(res=>res))
  }

  searchUser(username){
    this.username = username;
  }
}
