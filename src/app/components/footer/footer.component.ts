import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class FooterComponent  implements OnInit {

  constructor(
    protected readonly menuSrv: MenuService
  ) { }

  ngOnInit() {}

}
