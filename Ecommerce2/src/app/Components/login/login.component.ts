import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../Service/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginform: FormGroup
  constructor(private userservice: UsersService, private router: Router) {

    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z][0-9]@(gmail).com$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5,10}')])
    })

  }

  get password() {
    return this.loginform.get('password')
  }
  get email() {
    return this.loginform.get('email')
  }

  login(event: Event) {
    event.preventDefault()

    // console.log(this.loginform.value)

    if (this.loginform.value.email && this.loginform.value.password) {

      this.userservice.getUserloging(this.loginform.value.email, this.loginform.value.password).subscribe(data => {

        if (data[0]) {

          console.log("id", data[0])

          if (this.loginform.value.email && data[0].id) {

            localStorage.setItem('userId', `${data[0].id}`)

            this.userservice.checklogin.next(true)

            console.log(this.userservice.local)
            this.router.navigate(['productWithApi'])
          } else {

            console.log("out if")
          }
        } else {

          alert('insert true email and password')
        }
      })
    } else {
      alert('please insert data')
    }
  }

  toregister() {
    console.log('register')
    this.router.navigate(['regist'])
  }

}
