import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private fb: FormBuilder,private http: HttpClient) { }

    form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });

    onSubmit(): void {
      const formData = this.form.getRawValue();
      this.http.post('http://localhost:8000/register',formData).subscribe( 
        response => console.log(response),
        error => console.log(error)
      );
  }
}
