import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLogin: FormGroup;
  msgRegister = false;
  constructor(
    private _formBuilder: FormBuilder,
    private serverService: ServerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userLogin = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      phone: ['', [Validators.required, , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  submit() {
    this.serverService.getUser().subscribe(data=>{
      const user = data.some((item:any)=>{
        return ((item.email === this.userLogin.value.email)&&(item.phone === this.userLogin.value.phone))
      })
      console.log(user)
      if(user){
        localStorage.setItem("email", this.userLogin.value.email)
        this.router.navigate(["/dashboard"])
      }else{
        this.msgRegister = true;
        setTimeout(()=>{
          this.msgRegister = false;
        }, 3500);
      }
    });
  }

}
