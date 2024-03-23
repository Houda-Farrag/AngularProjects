import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../Service/users.service';
import { User } from '../../Modules/user';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userForm: FormGroup;
  newUser: User = {} as User
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      address: this.formBuilder.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        streat: ''
      }),
      mobile: this.formBuilder.array([]),
      password: ['', [Validators.required, Validators.pattern('[0-9]{5,10}')]],
      confirm: ['', Validators.required],
    })
    console.log(userService.getAllUsers().subscribe(data => console.log(data)))
  }

  get mobile() {
    return this.userForm.get('mobile') as FormArray
  }

  get address() {
    return this.userForm.get('address') as FormGroup
  }

  newMobil(): FormGroup {
    return this.formBuilder.group({ mob: ['', [Validators.pattern('[20][0-9]{9}')]] })
  }
  addMobileNumber(event: Event) {
    event.preventDefault()
    this.mobile.push(this.newMobil())

  }

  onSubmit() {

    this.newUser = {
      name: this.userForm.value.name, email: this.userForm.value.email,
      mobile: this.userForm.value.mobile,
      address: { ...this.userForm.value.address },
      password: this.userForm.value.password
    }

    if (this.userForm.valid && (this.userForm.value.confirm == this.newUser.password)) {
      let id = '';
      this.userService.addUser(this.newUser).subscribe(data => {

        id = data.id || "0"
        console.log(id)
        this.userService.getUserByID(id).subscribe(data => {

          if (id != '0') {
            this.router.navigate(['login'])

          }
        })
      })
    }

  }
  get password() {
    return this.userForm.get('password')
  }
  // get password() {
  //   return this.userForm.get('password')
  // }

  remove(i: number) {
    console.log(i)
    this.mobile.removeAt(i)
  }
}
