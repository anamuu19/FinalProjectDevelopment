import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private router:Router){}

  registerForm!:FormGroup

  ngOnInit():void{
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      comfirm: new FormControl("",[Validators.required]),
    })
  }

  onSubmit(){
    this.router.navigateByUrl("/")
  }
}
