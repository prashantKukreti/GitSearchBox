import { Component, OnInit } from '@angular/core';
import { GitUserService} from "../services/git-user.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from 'querystring';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  user: any;
  repos: any;
  btn:boolean = false;
  username: string;

  constructor(private gitUserService: GitUserService) {

    

   }

  ngOnInit() {
  }

  buttonClick(){
    this.btn= !this.btn;
   }
  
  searchUser(){
    this.gitUserService.searchUser(this.username);
    
    
    
    this.gitUserService.getUserInfo().subscribe(user =>{
      console.log(user);
        this.user = user;
    })

    this.gitUserService.getUserRepos().subscribe(repos=>{
      console.log(repos)
      this.repos = repos;
    })
     
  }
}
