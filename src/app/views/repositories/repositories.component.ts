import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ContentService } from '../../services/content.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit {

  public repos: any[];
  public user: User;

  constructor(private auth: AuthService, private api: ContentService) { }

  ngOnInit() {
    this.user = this.auth.user;
    this.api.getRepositories().subscribe(repos => this.repos = repos)
  }

}
