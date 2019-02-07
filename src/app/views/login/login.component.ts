import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private code: string = null
  github: any = environment.github;

  constructor(private routeParam: ActivatedRoute, private api: HttpClient, private route: Router) { }

  ngOnInit() {
    this.routeParam.queryParams.subscribe(query => {
      console.log(query.code)
      if (query.code){
        this.getToken(query.code).subscribe(respo => {
          console.log(respo)
          sessionStorage.setItem('user', JSON.stringify(respo));
          this.route.navigateByUrl('/repositories')
        })
      }
    })
  }

  getToken(clientCode){
    return this.api.post(`https://auth-github-server.herokuapp.com/oauth/accesstoken`, {code: clientCode})
  }

}
