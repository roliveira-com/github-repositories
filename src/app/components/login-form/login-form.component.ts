import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  
  loading: boolean = false
  @Input() titulo: string;
  github: any = environment.github;

  constructor(private router: Router, private routeParam: ActivatedRoute) {}

  ngOnInit() {
    this.routeParam.queryParams.subscribe(query => {
      if (query.code){
        this.loading = true
      }
    })
  }

  authorize(){
    this.loading = true
    window.location.href = `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${this.github.clientId}`;
  }

}
