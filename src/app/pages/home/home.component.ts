import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {
  title = 'walao!';

  constructor(
    private router: Router
  ) { }
}
