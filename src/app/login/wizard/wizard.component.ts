import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  progressBar:boolean = false;

  constructor(
    private serverService: ServerService,
    private _formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      type: ['', Validators.required],
      organizationName: ['', Validators.required],
    });
  }

  submit() {
    this.progressBar = true;
    this.serverService.addUser({...this.firstFormGroup.value, ...this.secondFormGroup.value})
    // console.log({...this.firstFormGroup.value, ...this.secondFormGroup.value});
    setTimeout(()=>{
      this.serverService.submitCheck.emit();
      this.progressBar = false
    },3000)
  }

}
