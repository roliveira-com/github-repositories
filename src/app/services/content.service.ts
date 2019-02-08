import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  getRepositories(): Observable<any>{
    return this.http.get(`https://api.github.com/user/repos`)
  }

  getStats(repo){
    return this.http.get(`https://api.github.com/${this.auth.user}/${repo.id}/forks`)
  }

}

