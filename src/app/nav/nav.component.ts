import { Component, ViewChild, OnInit } from '@angular/core';
import { navService } from './nav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('nav', { static: true })
  public nav!: MatSidenav;

	constructor(private NavService: navService) {	}

	ngOnInit(): void {
    console.log("SSS"+ this.nav);
		this.NavService.setSidenav(this.nav);
	}

}
