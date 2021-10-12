import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { navService } from '../nav/nav.service';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  user:any;

  constructor(private http: HttpClient,private userService: UserService,private router: Router,private nav: navService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.get('http://localhost:8000/api/user', {headers}).subscribe(
      result => this.user = result,
      error => {
        this.userService.logout();
        this.router.navigate(['/login']);
      }
    );
  }
}