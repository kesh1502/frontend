import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 user:any;
  loggedIn!: boolean;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.isUserLoggedIn().subscribe(
      status => this.loggedIn = status
    );
    console.log('isLogged', this.loggedIn);
  }

  logout(): void {
    this.userService.logout();
  }
}