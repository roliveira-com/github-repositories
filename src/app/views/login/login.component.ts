import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private routeParam: ActivatedRoute, public api: HttpClient) { }

  ngOnInit() {
    // this.api.post(`https://api.github.com/authorizations/clients/${this.github.clientId}`, {
    //   client_secret: this.github.clientSecret,
    //   scope: ['user_email', 'public_repo', 'private_repo'],
    //   note: 'Pan app'
    // })
    // .subscribe(resp => {
    //   console.log(resp)
    // })

    

    this.routeParam.queryParams.subscribe(query => {
      this.code = query.code;
      console.log(query)
      if (this.code){
        this.getToken(this.code).subscribe(respo => {
          console.log(respo)
        })
      }
    })
  }

  getToken(clientCode){

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }

    const credentials = {
      client_id: this.github.clientId,
      client_secret: this.github.clientSecret,
      code: clientCode
    }

    return this.api.post(`https://github.com/login/oauth/access_token`, credentials, options)
  }

}
