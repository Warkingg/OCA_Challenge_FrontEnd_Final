import { Component, OnInit } from '@angular/core';
import {UserToken} from '../model/user-token';
import {Router} from '@angular/router';
import {LoginService} from '../service/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: UserToken;
  constructor(private router :Router,
              private loginService :LoginService) {
    this.loginService.currentUser.subscribe(value => {
      this.currentUser = value;
    })
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
