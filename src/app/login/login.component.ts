import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  employeeData = [{
    username: 'admin',
    password: '123123'
  },
  {
    username: 'admin',
    password: '123456'
  }
]

  loginData = {
    username: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      const user = this.employeeData.some(employee => employee.username === this.loginData.username && employee.password === this.loginData.password);
      if(user){
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }else{ 
        alert('Invalid Username or Password');
       }
    } 
  }

}
