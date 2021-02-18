import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register = true;
  login = false
  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit() {
    this.serverService.submitCheck.subscribe(()=>{
      this.register = false;
      this.login = true;
    })
  }

  registerClick() {
    this.register = true;
    this.login = false;
  }

  loginClick() {
    this.login = true;
    this.register = false;
  }

}
