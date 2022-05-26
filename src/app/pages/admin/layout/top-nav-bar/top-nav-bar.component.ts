import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'admin-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
