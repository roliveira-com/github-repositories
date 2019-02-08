import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) { 
    
  }

  ngOnInit() {
    this.user = this.auth.user;
  }

  logout() {
    this.auth.logout();
  }

}
