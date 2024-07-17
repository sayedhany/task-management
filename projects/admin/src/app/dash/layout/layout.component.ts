import { Component } from '@angular/core';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private tokenSrv: TokenService) {}
  logedIn = false;
  ngOnInit(): void {
    if (!!this.tokenSrv.getToken()) {
      this.logedIn = true;
    }
  }
  logout() {
    this.tokenSrv.removeToken();
  }
}
