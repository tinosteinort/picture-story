import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Picture Story';

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['']);
  }
}
