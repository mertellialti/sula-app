import { Component, OnInit } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CreditCardComponent  implements OnInit {

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  toggleCard2(){
    console.log("Card is toggled");
  }

  toggleCard() {
    const card = document.querySelector('.card');
    const flipAnimation = this.animationCtrl.create()
      .addElement(card!)
      .duration(800)
      .fromTo('transform', 'rotateY(0)', 'rotateY(180deg)');
    
    flipAnimation.play();
  }

}
