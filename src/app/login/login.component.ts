import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  login() {
    console.log('logion');
    this.router.navigateByUrl('/first/first-child');
    // this.router.navigate(['/first/first-child']);
  }
}
