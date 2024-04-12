import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private router:Router){}
  signForm!: FormGroup
  ngOnInit():void{
    this.signForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      address: new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this.router.navigateByUrl("")
  }
}
