import { Component } from '@angular/core';
import { TokenService } from '../../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private tokenSrv: TokenService, private router: Router) {}
  logedIn = false;
  ngOnInit(): void {
    if (!!this.tokenSrv.getToken()) {
      this.logedIn = true;
    }
    else {
      this.router.navigate(['login']);
    }
  }
  logout() {
    this.tokenSrv.removeToken();
  }
}
