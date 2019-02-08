import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private routeParam: ActivatedRoute, private auth: AuthService, private route: Router) { 
    if(this.auth.user){
      this.route.navigate(['/repositories']);
    }
  }

  ngOnInit() {
    this.routeParam.queryParams.subscribe(query => {
      if (query.code){
        this.auth.login(query.code).subscribe(respo => {
          this.route.navigateByUrl('/repositories');
        })
      }
    })
  }

}
