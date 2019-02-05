import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  @Input() titulo: string

  constructor() { }

  ngOnInit() {
  }

}
