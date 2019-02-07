import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public code: string = null

  constructor(private routeParam: ActivatedRoute, private api: HttpClient) { }

  ngOnInit() {
    this.routeParam.queryParams.subscribe(query => {
      this.code = query.code;
      if (this.code){
        console.log(this.code)
      }
    })
  }

}
