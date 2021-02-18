import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { ServerService } from '../server.service';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private router: Router,
    private serverService: ServerService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    const email = localStorage.getItem("email");
    if(email){
      this.serverService.getUser().subscribe(data=>{
        console.log(data)
        let user:any = data.find((item:UserModel)=>{
          return item.email === email
        })
        // console.log(user)
        this.personDetails= user;
      });
    }else{
      this.router.navigate(["login"])
    }
  }

  logOut() {
    localStorage.removeItem("email");
    setTimeout(()=>{
      this.router.navigate(["login"])
    },1000)
  }

  personDetails:UserModel;

}
