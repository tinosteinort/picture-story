import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private router: Router) { }

  createNewStory(): void {
    this.router.navigate(['story']);
  }
}
