import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../Service/users.service';

export const guardsGuard: CanActivateFn = (route, state) => {

  const aut = inject(UsersService)
  const router = inject(Router)
  
  if (aut.checklogin.value) {
    console.log('from gards', aut.checklogin.value)
    return true
  }
  else {
    alert('log in first');
    router.navigate(['/login'])
    return false
  }
};
