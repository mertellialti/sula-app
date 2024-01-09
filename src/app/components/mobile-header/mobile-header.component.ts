import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlatformService } from 'src/app/services/platform/platform.service';

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
    protected readonly platformSrv: PlatformService
  ) { }

  ngOnInit() { }

  navCart() {
    this.router.navigate(['cart']);
  }

  async navigate(gender: string, category: string) {
    // Close the menu
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000);
    this.router.navigate(['collection', gender, category]);
  }
}
