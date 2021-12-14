import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginMode : boolean = true;
  Form:FormGroup;

  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.Form.value)
  }

  onforget(){
     this.router.navigateByUrl('/forget')
  }

  logMode(){
    this.loginMode = !this.loginMode;
  }

  onAdd(){
    this.router.navigateByUrl('/dashboard')
  }
}
