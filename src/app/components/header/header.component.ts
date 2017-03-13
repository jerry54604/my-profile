import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class HeaderComponent {
  title = 'header!';

  constructor(
    private router: Router
  ) { }
}
