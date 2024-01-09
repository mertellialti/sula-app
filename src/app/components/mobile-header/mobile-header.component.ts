import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHeaderComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  navCart() {
    this.router.navigate(['cart']);
  }
}
