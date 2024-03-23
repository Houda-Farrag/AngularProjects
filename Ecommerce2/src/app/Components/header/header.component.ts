import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../Service/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  check: boolean = false
  constructor(private userservice: UsersService, private router: Router) {

    this.userservice.checklogin.subscribe(data => this.check = data)
    console.log('check log in : ', this.userservice.checklogin.value)
  }
  logout() {


    this.userservice.checklogin.next(false)
    localStorage.removeItem('userId')

    this.router.navigate(['login'])
  }
}
