import { HttpClient } from '@angular/common/http';
import { Component,} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService) { }

  form = this.fb.group({
    email: '',
    password: ''
  });

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'EsocQD3eG3VbAUQbVZP8c57x3uF6J2OCRgsUlI9o',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      (result: any) => {
        //localStorage.setItem('token', result.access_token);
        this.userService.login(result.access_token);
        this.router.navigate(['/secure']);
        localStorage.setItem('currentUser', JSON.stringify({ email: formData.email }));
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
