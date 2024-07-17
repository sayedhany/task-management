import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private token: TokenService, private router: Router) {}
  logedIn = false;
  ngOnInit(): void {
    if (!!this.token.getToken()) {
      this.logedIn = true;
    } else {
      this.router.navigate(['auth/login']);
    }
  }
  logout() {
    this.token.removeToken();
  }
}
