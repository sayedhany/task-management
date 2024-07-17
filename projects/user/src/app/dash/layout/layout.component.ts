import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private token: TokenService) {}
  logedIn = false;
  ngOnInit(): void {
    if (!!this.token.getToken()) {
      this.logedIn = true;
    }
  }
  logout() {
    this.token.removeToken();
  }
}
