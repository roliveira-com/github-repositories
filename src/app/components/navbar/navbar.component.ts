import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { SlideDownEnter } from '../../animations/component'

@Component({
  selector: 'main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [ SlideDownEnter ]
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
