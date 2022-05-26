import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'no-access-page',
  templateUrl: './no-access-page.component.html',
  styleUrls: ['./no-access-page.component.css']
})
export class NoAccessPageComponent implements OnInit {
  showContactSupport: boolean = false;
  showThanksMsg: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  submitContactSupport() {
    this.showContactSupport = false;
    this.showThanksMsg = true;
  }
  backToLogin() {
    this.router.navigate(['/E/Login'])
  }
}
