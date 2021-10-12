import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import { RightSidenavComponent } from '../right-sidenav/right-sidenav.component';

@Injectable()
export class navService {
	private nav!: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.nav = sidenav;
	}

	public open() {
		return this.nav.open();
	}


	public close() {
		return this.nav.close();
	}

	public toggle() {
    console.log(this.nav);
		return this.nav.toggle();
	}
}