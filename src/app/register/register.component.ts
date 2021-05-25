import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../service/register/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {};
  constructor(private registerService : RegisterService,
              private router :Router
  ) { }

  ngOnInit() {
  }
  signup(form: NgForm) {
    let user = form.value;
    this.registerService.register(user).subscribe(abc=>{
      this.router.navigate(['/login']);
      alert("Successfully Registration");
    },error => {
      alert("Fail to Registration")
    })
  }
}
