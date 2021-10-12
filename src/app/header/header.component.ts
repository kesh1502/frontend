import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RightSidenavComponent } from '../right-sidenav/right-sidenav.component';
import { navService } from '../nav/nav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  loggedIn: boolean|undefined;
  toggleActive!: boolean;

  constructor(private userService: UserService,private sidenav: navService) { }

  ngOnInit(): void {
    this.userService.isUserLoggedIn().subscribe(
      status => this.loggedIn = status
    );
    console.log('isLogged', this.loggedIn);
  }
  
  toggleRightSidenav() {
    console.log('Clicked');
    this.toggleActive = !this.toggleActive;
		this.sidenav.toggle();
}

  logout(): void {
    this.userService.logout();
  }

}