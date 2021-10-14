import { Component, OnInit,ViewChild, OnChanges, Input } from '@angular/core';
import { navService } from '../nav/nav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})

export class RightSidenavComponent implements OnInit {
	
  user:any;
  @ViewChild('rightSidenav', { static: true })
  sidenav!: MatSidenav;
 
  @Input()
  openNav!: boolean;
  constructor(private http: HttpClient,private userService: UserService,private router: Router,private nav: navService) { }
 
   ngOnInit(): void {
     this.nav.setSidenav(this.sidenav);
   
     const headers = new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`});
     localStorage.setItem('tokenID', 'token');
     console.log(localStorage.getItem('token'));
     this.http.get('http://localhost:8000/api/user', {headers}).subscribe(
       result => this.user = result,
       error => {
         this.userService.logout();
         this.router.navigate(['/login']);
       }
     );
   }

   logout(): void {
    this.userService.logout();
  }
 }
